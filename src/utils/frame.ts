export function IsApp(): boolean {
  return window.self === window.top;
}

export function IsFrame(): boolean {
  return !IsApp();
}
