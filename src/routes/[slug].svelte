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
    margin: 5em 0 1em 0;
  }
  .container {
    margin: 0 auto;
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
      <area shape="poly" coords="336,370, 415,370, 415,455, 336,455" style='border: 1px solid red;'
            href={section.hotspots[1].URL}
            target="_blank" alt="Pedestal 1" />
      <area shape="poly" coords="535,385, 620,385, 620,470, 535,470" style='border: 1px solid green;'
            href={section.hotspots[2].URL}
            target="_blank" alt="Pedestal 2" />
      <area shape="poly" coords="740,375, 820,375, 820,455, 740,455" style='border: 1px solid blue;'
            href={section.hotspots[3].URL}
            target="_blank" alt="Pedestal 3" />
      <area shape="poly" coords="750,110, 1005,115, 990,305, 745,265" style='border: 1px solid yellow;'
            href={section.hotspots[4].URL}
            target="_blank" alt="Horizontal Display" />
    </map>
    <img usemap="#infographic" alt='Tyler Tech Booth' src='Booth_Template_FPO.png'>
  </div>
</figure>
