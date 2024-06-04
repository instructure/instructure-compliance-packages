import AWS from "./aws/index.ts";
import Canvas from "./canvas/index.ts";
import CanvasCatalog from "./canvas-catalog/index.ts";
import CanvasCommons from "./canvas-commons/index.ts";
import CanvasCredentials from "./canvas-credentials/index.ts";
import CanvasData from "./canvas-data/index.ts";
import CanvasLMS from "./canvas-lms/index.ts";
import CanvasMobile from "./canvas-mobile/index.ts";
import CanvasStudio from "./canvas-studio/index.ts";
import Elevate from "./elevate/index.ts";
import ElevateDataQuality from "./elevate-data-quality/index.ts";
import ElevateDataSync from "./elevate-data-sync/index.ts";
import ElevateK12Analytics from "./elevate-k12-analytics/index.ts";
import ElevateStandardsAlignment from "./elevate-standards-alignment/index.ts";
import Impact from "./impact/index.ts";
import Instructure from "./instructure/index.ts";
import Learnplatform from "./learnplatform/index.ts";
import Mastery from "./mastery/index.ts";
import MasteryConnect from "./mastery-connect/index.ts";
import MasteryItemBank from "./mastery-item-bank/index.ts";
import MasteryViewAssessments from "./mastery-view-assessments/index.ts";
import Parchment from "./parchment/index.ts";

const Links: RedirectBrand[] = [
  AWS,
  Instructure,
  Canvas,
  CanvasLMS,
  CanvasMobile,
  CanvasStudio,
  CanvasCatalog,
  CanvasCommons,
  CanvasData,
  Mastery,
  MasteryConnect,
  MasteryItemBank,
  MasteryViewAssessments,
  CanvasCredentials,
  Learnplatform,
  Parchment,
  Elevate,
  ElevateK12Analytics,
  ElevateStandardsAlignment,
  ElevateDataQuality,
  ElevateDataSync,
  Impact,
];

export default Links;
