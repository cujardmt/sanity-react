import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "4786y6is", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
});

// https://www.sanity.io/guides/build-your-first-blog-using-react