// Ordinarily, you"d generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we"re just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don"t want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const sections = [{
    title: "Appraisal and Tax",
    slug: "appraisal-and-tax",
    background: "/backgrounds/tylertech_booth_01_a_t.jpg",
    mp4: "/videos/tylertech_booth_01_a_t.mp4",
    webm: "/videos/tylertech_booth_01_a_t.webm",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://www.tylertech.com/at-3",
      },
      "pedestal1": {
        type: "Brochure",
        URL: "https://www.tylertech.com/at-1",
        text: "Product Information",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal2": {
        type: "PDF",
        URL: "https://www.tylertech.com/at-2",
        text: "Read Success Story",
        icon: "/icons/SinglePageDoc.svg",
        content: '<img src="/icons/SinglePageDoc.svg" alt="PDF" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc",
      },
      "pedestal3": {
        type: "Video",
        text: "Watch Video",
        icon: "/icons/Video.svg",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/g0zs4o4603?videoFoam=true" title="CLT Assessment Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
      },
      "hdisplay": {
        type: "horiz-display",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/vflet52iog?videoFoam=true" title="Land &amp; Official Records Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
      }
    }
  },
  {
    title: "Civic Services",
    slug: "civic-services",
    background: "/backgrounds/tylertech_booth_02_civic_services.jpg",
    mp4: "/videos/tylertech_booth_02_civic_services.mp4",
    webm: "/videos/tylertech_booth_02_civic_services.webm",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://www.tylertech.com/cs-4",
      },
      "pedestal1": {
        type: "Brochure",
        URL: "https://www.tylertech.com/cs-1",
        text: "Product Information",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="PDF" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal2": {
        type: "Brochure",
        URL: "https://www.tylertech.com/cs-2",
        text: "Client Success Story",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="PDF" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "https://www.tylertech.com/cs-3",
        text: "Read Success Story",
        icon: "/icons/SinglePageDoc.svg",
        content: '<img src="/icons/SinglePageDoc.svg" alt="PDF" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "hdisplay": {
        type: "horiz-display",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/faila5eefq?videoFoam=true" title="EnerGov Efficiency Stats Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
      }
    }
  },
  {
    title: "Courts",
    slug: "courts",
    background: "/backgrounds/tylertech_booth_03_courts.jpg",
    mp4: "/videos/tylertech_booth_03_courts.mp4",
    webm: "/videos/tylertech_booth_03_courts.webm",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://www.tylertech.com/cjc-3",
      },
      "pedestal1": {
        type: "Brochure",
        URL: "https://www.tylertech.com/cjc-1",
        text: "Solution Overview",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal2": {
        type: "Brochure",
        text: "Watch Video",
        icon: "/icons/Video.svg",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/2zox5p14e0?videoFoam=true" title="Tyler Jury Video Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "https://www.tylertech.com/cjc-2",
        text: "Read Success Story",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="PDF" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "hdisplay": {
        type: "horiz-display",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/g3nbz8cvq9?videoFoam=true" title="Courts &amp; Justice - State &amp; County Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
      }
    }
  },
  {
    title: "ERP",
    slug: "erp",
    background: "/backgrounds/tylertech_booth_04_erp.jpg",
    mp4: "/videos/tylertech_booth_04_erp.mp4",
    webm: "/videos/tylertech_booth_04_erp.webm",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://www.tylertech.com/erp-4",
      },
      "pedestal1": {
        type: "Brochure",
        URL: "https://www.tylertech.com/erp-1",
        text: "Mid-Size to Large Gov",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal2": {
        type: "Brochure",
        URL: "https://www.tylertech.com/erp-2",
        text: "Small to Mid-Size Gov",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal3": {
        type: "PDF",
        URL: "https://www.tylertech.com/erp-3",
        text: "Read Success Story",
        icon: "/icons/SinglePageDoc.svg",
        content: '<img src="/icons/SinglePageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "hdisplay": {
        type: "horiz-display",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/a4adk3gsvm?videoFoam=true" title="ERP Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
      }
    }
  },
  {
    title: "Courts Municipal",
    slug: "courts-municipal",
    background: "/backgrounds/tylertech_booth_05_courts_municipal.jpg",
    mp4: "/videos/tylertech_booth_05_courts_municipal.mp4",
    webm: "/videos/tylertech_booth_05_courts_municipal.webm",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://www.tylertech.com/cjm-3",
      },
      "pedestal1": {
        type: "Brochure",
        URL: "https://www.tylertech.com/cjm-1",
        text: "Solution Overview",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal2": {
        type: "PDF",
        URL: "https://www.tylertech.com/cjm-2",
        text: "Read Success Story",
        icon: "/icons/SinglePageDoc.svg",
        content: '<img src="/icons/SinglePageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal3": {
        type: "Video",
        URL: "https://www.tylertech.com/cjm-3",
        text: "Watch Video",
        icon: "/icons/Video.svg",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/6ne3y9holm?videoFoam=true" title="Incode Court Virtual Court Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
      },
      "hdisplay": {
        type: "horiz-display",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/6bkz5wk62y?videoFoam=true" title="Incode Court Case Resolution Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
      }
    }
  },
  {
    title: "Public Safety",
    slug: "public-safety",
    background: "/backgrounds/tylertech_booth_06_public_safety.jpg",
    mp4: "/videos/tylertech_booth_06_public_safety.mp4",
    webm: "/videos/tylertech_booth_06_public_safety.webm",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://www.tylertech.com/ps-4",
      },
      "pedestal1": {
        type: "Brochure",
        URL: "https://www.tylertech.com/ps-1",
        text: "Download Brochure",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal2": {
        type: "Video",
        URL: "https://tylertech.wistia.com/medias/tnpbgc4xge",
        text: "Watch Video",
        icon: "/icons/Video.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal3": {
        type: "Brochure",
        URL: "https://www.tylertech.com/publicsafetyresources",
        text: "Read Success Story",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "hdisplay": {
        type: "horiz-display",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/c32b64ivg4?videoFoam=true" title="Public Safety Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
      }
    }
  },
  {
    title: "Schools",
    slug: "schools",
    background: "/backgrounds/tylertech_booth_07_schools.jpg",
    mp4: "/videos/tylertech_booth_07_schools.mp4",
    webm: "/videos/tylertech_booth_07_schools.webm",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://www.tylertech.com/schools-4",
      },
      "pedestal1": {
        type: "Brochure",
        URL: "https://www.tylertech.com/schools-1",
        text: "Student Transportation",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal2": {
        type: "Brochure",
        URL: "https://www.tylertech.com/schools-2",
        text: "Small to Mid-Size K-12 ERP",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal3": {
        type: "Brochure",
        URL: "https://www.tylertech.com/schools-3",
        text: "Mid-Size to Large K-12 ERP",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "hdisplay": {
        type: "horiz-display",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/1ehd363ro2?videoFoam=true" title="Schools Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>',
      }
    }
  },
  {
    title: "Tyler Technologies",
    slug: "tyler-technologies",
    background: "/backgrounds/tylertech_booth_08_total_tyler.jpg",
    mp4: "/videos/tylertech_booth_08_total_tyler.mp4",
    webm: "/videos/tylertech_booth_08_total_tyler.webm",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://www.tylertech.com/tt-4",
      },
      "pedestal1": {
        type: "Brochure",
        URL: "https://www.tylertech.com/resources/resource-downloads/brochure-connected-communities",
        text: "Download Brochure",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal2": {
        type: "Brochure",
        URL: "https://www.tylertech.com/resources/resource-downloads/why-building-a-connected-community-is-every-leaders-job",
        text: "Read White Paper",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal3": {
        type: "Brochure",
        URL: "https://www.tylertech.com/resources/resource-downloads/covid-19-recovery-readiness-guide",
        text: "Download Guide",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="Brochure" height="80" />',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "hdisplay": {
        type: "horiz-display",
        content: 'https://tylertech.wistia.com/medias/1hsoid64lq',
      }
    }
  }
];


export default sections;
