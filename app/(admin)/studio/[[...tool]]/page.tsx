/*This route is responsible for the built-in authoring environment using Sanity Studio.*/

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static"; //ensures that Sanity Studio is only built at the time of deployment, making it fast and static.

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
