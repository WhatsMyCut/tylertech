<script>
  import { getContext } from 'svelte';
  import VideoPlayer from '../components/VideoPlayer.svelte';
  import ModalContent from '../components/Modal/ModalContent.svelte';
  export let section;
  let ended = false;
  let displayVideo;
  let displayImage;
  let background = section.background;
  let message;
  let content;
  let buttonText;
  let buttonIcon;

  const { open } = getContext('simple-modal');
	const showModal = (hotspot) => {
    message = hotspot.text;
    content = hotspot.content || '';
    buttonText =  hotspot.buttonText || '';
    buttonIcon = hotspot.buttonIcon || '';
    console.log('showModal', {message, content, buttonText, buttonIcon})
		open(ModalContent, { message, buttonText, buttonIcon, content });
	};

  function handleVideoEnd(message) {
    ended = true;
  }

  $: displayVideo = !ended ? 'none' : 'block';
  $: displayImage = !ended ? 'block' : 'none';
</script>

<style type="text/sass">
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
    transition: all 50s ease-in-out 1s;
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
    opacity: 1;
    visibility: visible;
  }
  .none {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
  .hotspot {
    cursor: pointer;
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
            href={section.hotspots.vdisplay.URL}
            target="_blank" alt="Vertical Display" />
      <area shape="poly" coords="336,370, 415,370, 415,455, 336,455" class="hotspot"
            on:click={showModal(section.hotspots.pedestal1)}
            target="_blank" alt="Pedestal 1" />
      <area shape="poly" coords="535,385, 620,385, 620,470, 535,470"
            href={section.hotspots.pedestal2.URL}
            target="_blank" alt="Pedestal 2" />
      <area shape="poly" coords="740,375, 820,375, 820,455, 740,455"
            on:click={showModal(section.hotspots.pedestal3)}
            target="_blank" alt="Pedestal 3" />
      <area shape="poly" coords="750,110, 1005,115, 990,305, 745,265"
            on:click={showModal(section.hotspots.hdisplay)}
            target="_blank" alt="Horizontal Display" />
    </map>
    <img usemap="#infographic" alt='Tyler Tech Booth' src={background}>
  </div>
  <div class="container static-content {displayImage}">
    <VideoPlayer { section } { handleVideoEnd } />
  </div>

</figure>
