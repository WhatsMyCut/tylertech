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
        URL: "https://empower.tylertech.com/Appraisal-and-Tax-Virtual-Trade-Show.html",
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
    background: "/backgrounds/tylertech_booth_02_civic_services_X.jpg",
    mp4: "/videos/tylertech_booth_02_civic_services.mp4",
    webm: "/videos/tylertech_booth_02_civic_services.webm",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://empower.tylertech.com/Civic-Services-Virtual-Trade-Show.html",
      },
      "pedestal1": {
        type: "Brochure",
        URL: "https://www.tylertech.com/cs-1",
        text: "Product Information",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="PDF" height="80" /><p>EnerGov Product Overview</p>',
        buttonText: "Download",
        buttonIcon: "download",
        buttonOnClick: "downloadDoc"
      },
      "pedestal2": {
        type: "Brochure",
        URL: "https://www.tylertech.com/cs-2",
        text: "Product Information",
        icon: "/icons/MultiPageDoc.svg",
        content: '<img src="/icons/MultiPageDoc.svg" alt="PDF" height="80" /><p>Product Overview</p>',
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "https://www.tylertech.com/cs-3",
        text: "Read Success Story",
        icon: "/icons/SinglePageDoc.svg",
        content: '<img src="/icons/SinglePageDoc.svg" alt="PDF" height="80" /><p>EnerGov Product Overview</p>',
      },
      "hdisplay": {
        type: "horiz-display",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/vflet52iog?videoFoam=true" title="Land &amp; Official Records Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
      }
    }
  },
  {
    title: "Courts",
    slug: "courts",
    background: "/backgrounds/tylertech_booth_03_courts.jpg",
    mp4: "/videos/tylertech_booth_03_courts.mp4",
    webm: "/videos/tylertech_booth_03_courts.mp4",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://empower.tylertech.com/Courts-Virtual-Trade-Show.html",
      },
      "pedestal1": {
        type: "pedestal1",
        URL: "https://www.tylertech.com/cjc-1",
        text: "Product Information",
        content: '<img src="/icons/pdf.png" alt="PDF" height="80" />',
        buttonText: "Download",
        buttonIcon: "download"
      },
      "pedestal2": {
        type: "pedestal2",
        URL: "https://www.tylertech.com/at-2",
        text: "Watch Video",
        content: "/icons/video.png",
        buttonText: "Download",
        buttonIcon: "download"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "http://www.hotspot4.url/",
        text: "Read Success Story",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/g0zs4o4603?videoFoam=true" title="CLT Assessment Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
        buttonText: 'Close',
        buttonIcon: undefined
      },
      "hdisplay": {
        type: "horiz-display",
        URL: "http://www.hotspot5.url/",
      }
    }
  },
  {
    title: "ERP",
    slug: "erp",
    background: "/backgrounds/tylertech_booth_04_erp.jpg",
    mp4: "/videos/tylertech_booth_04_erp.mp4",
    webm: "/videos/tylertech_booth_04_erp.mp4",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://empower.tylertech.com/ERP-Virtual-Trade-Show.html",
      },
      "pedestal1": {
        type: "pedestal1",
        URL: "https://www.tylertech.com/at-1",
        text: "ERP Solutions",
        content: '<img src="/icons/pdf.png" alt="PDF" height="80" />',
        buttonText: "Download",
        buttonIcon: "download"
      },
      "pedestal2": {
        type: "pedestal2",
        URL: "https://www.tylertech.com/at-2",
        text: "Update Your Antiquated System",
        content: "/icons/video.png",
        buttonText: "Download",
        buttonIcon: "download"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "http://www.hotspot4.url/",
        text: "Your Property Taxes",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/g0zs4o4603?videoFoam=true" title="CLT Assessment Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
        buttonText: 'Close',
        buttonIcon: undefined
      },
      "hdisplay": {
        type: "horiz-display",
        URL: "http://www.hotspot5.url/",
      }
    }
  },
  {
    title: "Courts Municipal",
    slug: "courts-municipal",
    background: "/backgrounds/tylertech_booth_05_courts_municipal.jpg",
    mp4: "/videos/tylertech_booth_05_courts_municipal.mp4",
    webm: "/videos/tylertech_booth_05_courts_municipal.mp4",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://empower.tylertech.com/Courts-Municipal-Virtual-Trade-Show.html",
      },
      "pedestal1": {
        type: "pedestal1",
        URL: "https://www.tylertech.com/at-1",
        text: "Courts Municipal Solutions",
        content: '<img src="/icons/pdf.png" alt="PDF" height="80" />',
        buttonText: "Download",
        buttonIcon: "download"
      },
      "pedestal2": {
        type: "pedestal2",
        URL: "https://www.tylertech.com/at-2",
        text: "Update Your Antiquated System",
        content: "/icons/video.png",
        buttonText: "Download",
        buttonIcon: "download"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "http://www.hotspot4.url/",
        text: "Your Property Taxes",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/g0zs4o4603?videoFoam=true" title="CLT Assessment Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
        buttonText: 'Close',
        buttonIcon: undefined
      },
      "hdisplay": {
        type: "horiz-display",
        URL: "http://www.hotspot5.url/",
      }
    }
  },
  {
    title: "Public Safety",
    slug: "public-safety",
    background: "/backgrounds/tylertech_booth_06_public_safety.jpg",
    mp4: "/videos/tylertech_booth_06_public_safety.mp4",
    webm: "/videos/tylertech_booth_06_public_safety.mp4",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://empower.tylertech.com/Public-Safety-Virtual-Trade-Show.html",
      },
      "pedestal1": {
        type: "pedestal1",
        URL: "https://www.tylertech.com/at-1",
        text: "Public Safety Solutions",
        content: '<img src="/icons/pdf.png" alt="PDF" height="80" />',
        buttonText: "Download",
        buttonIcon: "download"
      },
      "pedestal2": {
        type: "pedestal2",
        URL: "https://www.tylertech.com/at-2",
        text: "Update Your Antiquated System",
        content: "/icons/video.png",
        buttonText: "Download",
        buttonIcon: "download"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "http://www.hotspot4.url/",
        text: "Your Property Taxes",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/g0zs4o4603?videoFoam=true" title="CLT Assessment Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
        buttonText: 'Close',
        buttonIcon: undefined
      },
      "hdisplay": {
        type: "horiz-display",
        URL: "http://www.hotspot5.url/",
      }
    }
  },
  {
    title: "Schools",
    slug: "schools",
    background: "/backgrounds/tylertech_booth_07_schools.jpg",
    mp4: "/videos/tylertech_booth_07_schools.mp4",
    webm: "/videos/tylertech_booth_07_schools.mp4",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://empower.tylertech.com/Schools-Virtual-Trade-Show.html",
      },
      "pedestal1": {
        type: "pedestal1",
        URL: "https://www.tylertech.com/schools-7",
        text: "Schools Solutions",
        content: '<img src="/icons/pdf.png" alt="PDF" height="80" />',
        buttonText: "Download",
        buttonIcon: "download"
      },
      "pedestal2": {
        type: "pedestal2",
        URL: "https://www.tylertech.com/schools-7",
        text: "Update Your Antiquated System",
        content: "/icons/video.png",
        buttonText: "Download",
        buttonIcon: "download"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "http://www.hotspot4.url/",
        text: "Your Property Taxes",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/g0zs4o4603?videoFoam=true" title="CLT Assessment Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
        buttonText: 'Close',
        buttonIcon: undefined
      },
      "hdisplay": {
        type: "horiz-display",
        URL: "http://www.hotspot5.url/",
      }
    }
  },
  {
    title: "Total Tyler",
    slug: "total-tyler",
    background: "/backgrounds/tylertech_booth_08_total_tyler.jpg",
    mp4: "/videos/tylertech_booth_08_total_tyler.mp4",
    webm: "/videos/tylertech_booth_08_total_tyler.mp4",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://empower.tylertech.com/Total-Tyler-Virtual-Trade-Show.html",
      },
      "pedestal1": {
        type: "pedestal1",
        URL: "https://www.tylertech.com/total-tyler-8",
        text: "Total Tyler Solutions",
        content: '<img src="/icons/pdf.png" alt="PDF" height="80" />',
        buttonText: "Download",
        buttonIcon: "download"
      },
      "pedestal2": {
        type: "pedestal2",
        URL: "https://www.tylertech.com/total-tyler-8",
        text: "Update Your Antiquated System",
        content: "/icons/video.png",
        buttonText: "Download",
        buttonIcon: "download"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "http://www.hotspot4.url/",
        text: "Your Property Taxes",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/g0zs4o4603?videoFoam=true" title="CLT Assessment Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
        buttonText: 'Close',
        buttonIcon: undefined
      },
      "hdisplay": {
        type: "horiz-display",
        URL: "http://www.hotspot5.url/",
      }
    }
  }
];


export default sections;
