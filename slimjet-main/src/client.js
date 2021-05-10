import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "z0skifgr",
  dataset: "production",
  token: process.env.REACT_APP_SANITY_WRITE_TOKEN,
  useCdn: true,
});
