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

  // $: displayVideo = ended ? 'none' : 'block';
  $: displayImage = ended ? 'block' : 'none';
</script>

<style type="text/sass">
  figure {
    text-align: center;
    margin: 0px 17%;
    height: 75vh;
    background-color: #131218;
    position: relative;
  }
  .container {
    position: absolute;
    margin: 0 auto;
    height: 89vh;
  }
  div.static-content, div.video-content {
    width: 100%;
    height: auto;
  }
  div.video-content {
    z-index: 0;
  }
  div.static-content {
    z-index: 1;
    transition: all 2s ease-in-out;
  }
  img {
    width: 100%;
    height: auto;
  }
  .booth-headline {
    font-size: 22px;
    margin: 0 0 10px;
  }
  .block {
    opacity: 1;
  }
  .none {
    opacity: 0;
  }
  .ptext {
    position: absolute;
    font-family: "Trade Gothic";
    font-size: 1.25rem;
    font-weight: 900;
    font-stretch: condensed;
    text-align: center;
    letter-spacing: -0.015em;
    color: white;
    text-align: center;
    align-self: center;
  }
  .ptext.pedestal1 {
    left: 24%;
    bottom: 22%;
  }
  .ptext.pedestal2 {
    left: 35%;
    bottom: 17%;
    width: auto;
    right: 35%;
  }
  .ptext.pedestal3 {
    right: 23.5%;
    bottom: 21%;
  }
  .hotspot {
    position: absolute;
    cursor: pointer;
    background-size: contain;
    width: 3.25rem;
    height: auto;
  }
  .hotspot.vdisplay {
    left: 15.5%;
    top: 4.5%;
    transform: rotateX(0deg) rotateY(36deg) rotateZ(-11deg) skew(-8deg, 0deg);
    clip-path: polygon(-1% 0%, 95% 12%, 95% 99.5%, 2% 99%);
    width: 17.5%;
    height: 52.6%;
  }
  .hotspot.pedestal1 {
    left: 30%;
    top: 58.35%;
  }
  .hotspot.pedestal2 {
    left: 47.25%;
    top: 60.25%;
  }
  .hotspot.pedestal3 {
    right: 29.75%;
    top: 58.5%;
  }
  .hotspot.hdisplay {
    left: 64%;
    top: 16.5%;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(4deg) skew(-3deg, 2deg);
    clip-path: polygon(1% 10%, 96% 0%, 100% 98%, 6% 91%);
    height: 28.5%;
    width: 22.6%;
  }
  .hotspot.vdisplay:hover,
  .hotspot.hdisplay:hover {
    background-color: rgba(255,255,255,0.8);
  }
  .hotspot.pedestal1:active,
  .hotspot.pedestal2:active,
  .hotspot.pedestal3:active,
  .hotspot.pedestal1:hover,
  .hotspot.pedestal2:hover,
  .hotspot.pedestal3:hover {
    box-shadow: 0 0 40px 20px #fff;
    background-color: rgba(255,255,255,0.8);
  }

  @media (min-width: 680px) {
  }

</style>


<svelte:head>
	<title>Tyler Technologies Booth: {section.title}</title>
</svelte:head>


<figure>
  <div class="container static-content {displayImage}">
    <img alt='Tyler Tech Booth' src={background}>
    <div class="hotspot vdisplay {section.slug}" on:click={openLink(section.hotspots.vdisplay.URL)}>&nbsp;</div>
    <div class="hotspot pedestal1 {section.slug}" on:click={showModal(section.hotspots.pedestal1)}><img src="{section.hotspots.pedestal1.icon}" alt={section.hotspots.pedestal1.type} /></div>
    <div class="hotspot pedestal2 {section.slug}" on:click={showModal(section.hotspots.pedestal2)}><img src="{section.hotspots.pedestal2.icon}" alt={section.hotspots.pedestal2.type} /></div>
    <div class="hotspot pedestal3 {section.slug}" on:click={showModal(section.hotspots.pedestal3)}><img src="{section.hotspots.pedestal3.icon}" alt={section.hotspots.pedestal3.type} /></div>
    <div class="hotspot hdisplay {section.slug}" on:click={showModal(section.hotspots.hdisplay)}>&nbsp;</div>
    <div class="ptext pedestal1 {section.slug}">{section.hotspots.pedestal1.text}</div>
    <div class="ptext pedestal2 {section.slug}">{section.hotspots.pedestal2.text}</div>
    <div class="ptext pedestal3 {section.slug}">{section.hotspots.pedestal3.text}</div>
  </div>
  <div class="container video-content">
    <VideoPlayer { section } { handleVideoEnd } />
  </div>

</figure>
