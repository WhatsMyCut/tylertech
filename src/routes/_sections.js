// Ordinarily, you"d generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we"re just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don"t want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const sections = [
  {
    title: "Appraisal and Tax",
    slug: "appraisal-and-tax",
    background: "/backgrounds/tylertech_booth_01_a_t.jpg",
    mp4: "/videos/tylertech_booth_01_a_t.mp4",
    webm: "/videos/tylertech_booth_01_a_t.mp4",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "https://empower.tylertech.com/Appraisal-and-Tax-Virtual-Trade-Show.html",
        text: "Appraisal and Tax vert display",
        content: undefined,
        buttonText: undefined,
        buttonIcon: undefined,
      },
      "pedestal1": {
        type: "pedestal1",
        URL: "https://www.tylertech.com/at-1",
        text: "Appraisal and Tax pedestal 1",
        content: "/icons/pdf.png",
        buttonText: "Download",
        buttonIcon: "download"
      },
      "pedestal2": {
        type: "pedestal2",
        URL: "https://www.tylertech.com/at-2",
        text: "Appraisal and Tax pedestal 2",
        content: "/icons/video.png",
        buttonText: "Download",
        buttonIcon: "download"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "http://www.hotspot4.url/",
        text: "Appraisal and Tax pedestal 3",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/g0zs4o4603?videoFoam=true" title="CLT Assessment Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
        buttonText: 'Close',
        buttonIcon: undefined
      },
      "hdisplay": {
        type: "horiz-display",
        URL: "http://www.hotspot5.url/",
        text: "Appraisal and Tax horiz display",
        content: '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/vflet52iog?videoFoam=true" title="Land &amp; Official Records Virtual Trade Show Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>',
        buttonText: "Close",
        buttonIcon: undefined
      }
    }
  },
  {
    title: "Civic Services",
    slug: "civic-services",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "http://www.hotspot1.url/",
        text: "Civic Services vert display"
      },
      "pedestal1": {
        type: "pedestal1",
        URL: "http://www.hotspot2.url/",
        text: "Civic Services pedestal 1"
      },
      "pedestal2": {
        type: "pedestal2",
        URL: "http://www.hotspot3.url/",
        text: "Civic Services pedestal 2"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "http://www.hotspot4.url/",
        text: "Civic Services pedestal 3"
      },
      "hdisplay": {
        type: "horiz-display",
        URL: "http://www.hotspot5.url/",
        text: "Civic Services horiz display"
      }
    }
  },
  {
    title: "Courts",
    slug: "courts",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "http://www.hotspot1.url/",
        text: "Courts vert display"
      },
      "pedestal1": {
        type: "pedestal1",
        URL: "http://www.hotspot2.url/",
        text: "Courts pedestal 1"
      },
      "pedestal2": {
        type: "pedestal2",
        URL: "http://www.hotspot3.url/",
        text: "Courts pedestal 2"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "http://www.hotspot4.url/",
        text: "Courts pedestal 4"
      },
      "hdisplay": {
        type: "horiz-display",
        URL: "http://www.hotspot5.url/",
        text: "Courts horiz display"
      }
    }
  },
  {
    title: "ERP",
    slug: "erp",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "http://www.hotspot1.url/",
        text: "ERP vert display"
      },
      "pedestal1": {
        type: "pedestal1",
        URL: "http://www.hotspot2.url/",
        text: "ERP pedestal 1"
      },
      "pedestal2": {
        type: "pedestal2",
        URL: "http://www.hotspot3.url/",
        text: "ERP pedestal 2"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "http://www.hotspot4.url/",
        text: "ERP pedestal 3"
      },
      "hdisplay": {
        type: "horiz-display",
        URL: "http://www.hotspot5.url/",
        text: "ERP horiz display"
      }
    }
  },
  {
    title: "Courts Municipal",
    slug: "courts-municipal",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "http://www.hotspot1.url/",
        text: "Courts Municipal vert display"
      },
      "pedestal1": {
        type: "pedestal1",
        URL: "http://www.hotspot2.url/",
        text: "Courts Municipal pedestal 1"
      },
      "pedestal2": {
        type: "pedestal2",
        URL: "http://www.hotspot3.url/",
        text: "Courts Municipal pedestal 2"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "http://www.hotspot4.url/",
        text: "Courts Municipal pedestal 3"
      },
      "hdisplay": {
        type: "horiz-display",
        URL: "http://www.hotspot5.url/",
        text: "Courts Municipal horiz display"
      }
    }
  },
  {
    title: "Public Safety",
    slug: "public-safety",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "http://www.hotspot1.url/",
        text: "Public Safety vert display"
      },
      "pedestal1": {
        type: "pedestal1",
        URL: "http://www.hotspot2.url/",
        text: "Public Safety pedestal 1"
      },
      "pedestal2": {
        type: "pedestal2",
        URL: "http://www.hotspot3.url/",
        text: "Public Safety pedestal 2"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "http://www.hotspot4.url/",
        text: "Public Safety pedestal 3"
      },
      "hdisplay": {
        type: "horiz-display",
        URL: "http://www.hotspot5.url/",
        text: "Public Safety horiz display"
      }
    }
  },
  {
    title: "Schools",
    slug: "schools",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "http://www.hotspot1.url/",
        text: "Schools vert display"
      },
      "pedestal1": {
        type: "pedestal1",
        URL: "http://www.hotspot2.url/",
        text: "Schools pedestal 1"
      },
      "pedestal2": {
        type: "pedestal2",
        URL: "http://www.hotspot3.url/",
        text: "Schools pedestal 2"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "http://www.hotspot4.url/",
        text: "Schools pedestal 3"
      },
      "hdisplay": {
        type: "horiz-display",
        URL: "http://www.hotspot5.url/",
        text: "Schools horiz display"
      }
    }
  },
  {
    title: "Total Tyler",
    slug: "total-tyler",
    hotspots: {
      "vdisplay": {
        type: "vert-display",
        URL: "http://www.hotspot1.url/",
        text: "Total Tyler vert display"
      },
      "pedestal1": {
        type: "pedestal1",
        URL: "http://www.hotspot2.url/",
        text: "Total Tyler pedestal 1"
      },
      "pedestal2": {
        type: "pedestal2",
        URL: "http://www.hotspot3.url/",
        text: "Total Tyler pedestal 2"
      },
      "pedestal3": {
        type: "pedestal3",
        URL: "http://www.hotspot4.url/",
        text: "Total Tyler pedestal 3"
      },
      "hdisplay": {
        type: "horiz-display",
        URL: "http://www.hotspot5.url/",
        text: "Total Tyler horiz display"
      }
    }
  }
];


export default sections;
