export function IsApp(): boolean {
  return window.self === window.top;
}

export function IsFrame(): boolean {
  return !IsApp();
}

export function LTIConfig(): Promise<Config> {
  const config: Config = {
    mode: "LTI",
    lti: {
      "lti.getPageSettings": null,
      "lti.capabilities": null,
    },
  };

  return new Promise((resolve) => {
    const handleMessage = (event: MessageEvent<LTIEvent>) => {
      const { message_id } = event.data;
      // @ts-ignore
      config.lti[message_id] = event.data;
    };

    window.addEventListener("message", handleMessage);

    // @ts-ignore
    for (const key of Object.keys(config.lti) as [keyof LTIConfig]) {
      window.parent.postMessage(
        {
          subject: key,
          message_id: key,
        },
        "*",
      );
    }

    const checkConfig = () => {
      // @ts-ignore
      const configComplete = Object.values(config.lti).every(
        (value) => value !== null,
      );
      if (configComplete) {
        window.removeEventListener("message", handleMessage);
        resolve(config);
      } else {
        setTimeout(checkConfig, 50);
      }
    };

    checkConfig();
  });
}
