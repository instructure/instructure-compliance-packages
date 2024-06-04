import DE from "./DE.ts";
import EN from "./EN.ts";
import ES_LA from "./ES_LA.ts";
import PT_BR from "./PT_BR.ts";

const Instructure: RedirectBrand = {
  brand: "Instructure",
  links: [...EN, ...ES_LA, ...PT_BR, ...DE],
};

export default Instructure;
