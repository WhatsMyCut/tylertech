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

  const openLink = (url) => {
    return window.open(url, 'tylertech');
  }

  function handleVideoEnd(message) {
    ended = true;
  }

  $: displayVideo = !ended ? 'none' : 'block';
  $: displayImage = !ended ? 'block' : 'none';
</script>

<style type="text/sass">
  figure {
    text-align: center;
    margin: 0 auto;
    width: 100%;
    background-color: #131218;
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
  .ptext {
    position: absolute;
    font-family: "Trade Gothic";
    font-size: 1.2rem;
    color: white;
    text-align: center;
  }
  .ptext.pedestal1 {
    left: 26%;
    bottom: 21%;
  }
  .ptext.pedestal2 {
    left: 35%;
    bottom: 18.5%;
    width: auto;
    right: 35%;
  }
  .ptext.pedestal3 {
    left: 61.5%;
    bottom: 21%;
  }
  .hotspot {
    position: absolute;
    cursor: pointer;
    border: 1px solid red;
  }
  .hotspot.vdisplay {
    left: 15.5%;
    top: 4.5%;
    transform: rotateX(0deg) rotateY(36deg) rotateZ(-11deg) skew(-8deg, 0deg);
    width: 17.5%;
    height: 52.6%;
  }
  .hotspot.pedestal1 {
    left: 20vw;
    top: 30vh;
  }
</style>


<svelte:head>
	<title>Tyler Technologies Booth: {section.title}</title>
</svelte:head>


<figure>
  <div class="container static-content {displayVideo}">
    <map name="infographic">
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
    <div class="hotspot vdisplay" on:click={openLink(section.hotspots.vdisplay.URL)}>&nbsp;</div>
    <div class="ptext pedestal1">{section.hotspots.pedestal1.text}</div>
    <div class="ptext pedestal2">{section.hotspots.pedestal2.text}</div>
    <div class="ptext pedestal3">{section.hotspots.pedestal3.text}</div>
  </div>
  <div class="container video-content {displayImage}">
    <VideoPlayer { section } { handleVideoEnd } />
  </div>

</figure>
