<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { section: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
  export let section;
</script>

<style type="text/sass">
  @import '../style/global.scss';
  figure {
    text-align: center;
    margin: 2em 0 1em 0;
  }
  .container {
    margin: 0 auto;
    position: relative;
  }

  .container > div {
    position: absolute;
    color: white;
    font-family: "Trade Gothic", sans-serif;
    font-size: 12px;
    text-align: center;
    width: auto;
    white-space: nowrap;
  }

  .p1text {
    bottom: 151px;
    margin-left: 32.5%;
    margin-right: 57.5%;
  }

  .p1text.appraisal-and-tax,
  .p1text.courts-municipal  {
    margin-left: 30.25%;
    margin-right: 59.75%;
  }
  .p1text.civic-services,
  .p1text.public-safety,
  .p1text.total-tyler {
    margin-left: 31%;
    margin-right: 59%;
  }

  .p2text {
    bottom: 135px;
    margin-left: 47%;
    margin-right: 53%;
  }
  .p2text.appraisal-and-tax {
    margin-left: 44.75%;
    margin-right: 65.25%;
  }
  .p2text.civic-services,
  .p2text.public-safety,
  .p2text.total-tyler {
    margin-left: 45.5%;
    margin-right: 54.5%;
  }
  .p2text.courts-municipal {
    margin-left: 45%;
    margin-right: 55%;
  }

  .p3text {
    bottom: 149px;
    margin-left: 61.5%;
    margin-right: 28.5%;
  }

  .p3text.appraisal-and-tax,
  .p3text.courts-municipal {
    margin-left: 59%;
    margin-right: 41%;
  }
  .p3text.civic-services {
    margin-left: 59.5%;
    margin-right: 30.5%;
  }
  .p3text.public-safety,
  .p3text.total-tyler {
    margin-left: 60%;
    margin-right: 30%;
  }


  img {
    height: 650px;
    width: 1155px;
  }
  .booth-headline {
    position: relative;
    left: 105px;
    font-size: 22px;
    margin: 0 0 10px;
  }
</style>


<svelte:head>
	<title>Tyler Technologies Booth: {section.title}</title>
</svelte:head>


<figure>
  <h1 class="headline booth-headline">{section.title}</h1>
  <div class="container">
    <map name="infographic">
      <area shape="poly" coords="185,38, 350,48, 360,357, 210,390"
            href={section.hotspots[0].URL}
            target="_blank" alt="Vertical Display" />
      <area shape="poly" coords="336,370, 415,370, 415,455, 336,455"
            href={section.hotspots[1].URL}
            target="_blank" alt="Pedestal 1" />
      <area shape="poly" coords="535,385, 620,385, 620,470, 535,470"
            href={section.hotspots[2].URL}
            target="_blank" alt="Pedestal 2" />
      <area shape="poly" coords="740,375, 820,375, 820,455, 740,455"
            href={section.hotspots[3].URL}
            target="_blank" alt="Pedestal 3" />
      <area shape="poly" coords="750,110, 1005,115, 990,305, 745,265"
            href={section.hotspots[4].URL}
            target="_blank" alt="Horizontal Display" />
    </map>
    <img usemap="#infographic" alt='Tyler Tech Booth' src='Booth_Template_FPO.png'>
    <div class="p1text {section.slug}">{section.hotspots[1].text}</div>
    <div class="p2text {section.slug}">{section.hotspots[2].text}</div>
    <div class="p3text {section.slug}">{section.hotspots[3].text}</div>
  </div>
</figure>
