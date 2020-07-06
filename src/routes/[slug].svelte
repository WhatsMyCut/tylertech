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
    position: relative;
  }

  img {
    width: 1142px;
    height: auto;
    margin: 0 0 1em 0;
  }
  .booth-headline {
    position: relative;
    left: 105px;
    font-size: 22px;
    margin: 0 0 10px;
  }
  .bordered {
    border: 1px solid pink;
  }
</style>


<svelte:head>
	<title>Tyler Technologies Booth: {section.title}</title>
</svelte:head>


<figure>
  <h1 class="headline booth-headline">{section.title}</h1>
  <img usemap="#infographic" alt='Tyler Tech Booth' src='Booth_Template_FPO.png'>
  <map name="infographic">
    <area shape="poly" coords="130,147,200,107,254,219,130,228" class='bordered'
          href={section.hotspots[0].URL}
          target="_blank" alt="Vertical Display" />
    <area shape="poly" coords="130,147,130,228,6,219,59,107" class='bordered'
          href="https://developer.mozilla.org/docs/Web/CSS"
          target="_blank" alt="CSS" />
    <area shape="poly" coords="130,147,200,107,130,4,59,107" class='bordered'
          href="https://developer.mozilla.org/docs/Web/JavaScript"
          target="_blank" alt="JavaScript" />
  </map>
</figure>
