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
  import VideoPlayer from '../components/VideoPlayer.svelte';
  export let section;
  let ended = false;
  let displayVideo;
  let displayImage;

  function handleVideoEnd(message) {
    console.log('callback', {message});
    ended = true;
  }

  $: displayVideo = !ended ? 'none' : 'block';
  $: displayImage = !ended ? 'block' : 'none';
</script>

<style type="text/sass">
  @import '../style/global.scss';
  figure {
    text-align: center;
    margin: 2em auto 1em;
    width: 1155px;
  }
  .container {
    margin: 0 auto 100px;
    position: relative;
  }

  div.static-content, div.video-content {
    transition: all 10s ease-in-out 1s;
  }
  img {
    height: auto;
    width: 100%;
  }
  .booth-headline {
    font-size: 22px;
    margin: 0 0 10px;
  }
  .block {
    display: block;
  }
  .none {
    display: none;
  }
</style>


<svelte:head>
	<title>Tyler Technologies Booth: {section.title}</title>
</svelte:head>


<figure>
  <h1 class="headline booth-headline">{section.title}</h1>
  <div class="container static-content {displayVideo}">
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
  </div>
  <div class="container static-content {displayImage}">
    <VideoPlayer { section } { handleVideoEnd } />
  </div>

</figure>
