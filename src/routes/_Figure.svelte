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
  .ptext {
    position: absolute;
    font-family: "Trade Gothic";
    font-size: 1.25rem;
    font-weight: 900;
    font-stretch: condensed;
    text-align: center;
    letter-spacing: -0.015em;
    color: white;
  }
  .ptext.pedestal1 {
    left: 26%;
    bottom: 22%;
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
    background-size: cover;
    width: 5.25rem;
    height: 5.25rem;
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
    background: url('/icons/MultiPageDoc_x.svg') center center no-repeat;
    left: 26.65rem;
    top: 29.75rem;
  }
  .hotspot.pedestal2 {
    background: url('/icons/SinglePageDoc_x.svg') center center no-repeat;
    left: 42.3rem;
    top: 30.65rem;
  }
  .hotspot.pedestal3 {
    background: url('/icons/Video_x.svg') center center no-repeat;
    left: 58.05rem;
    top: 29.75rem;
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

</style>


<svelte:head>
	<title>Tyler Technologies Booth: {section.title}</title>
</svelte:head>


<figure>
  <div class="container static-content {displayVideo}">
    <img alt='Tyler Tech Booth' src={background}>
    <div class="hotspot vdisplay" on:click={openLink(section.hotspots.vdisplay.URL)}>&nbsp;</div>
    <div class="hotspot pedestal1" on:click={showModal(section.hotspots.pedestal1)}><svg src="/icons/MultiPageDoc.svg" alt="pdf" /></div>
    <div class="hotspot pedestal2" on:click={showModal(section.hotspots.pedestal2)}>&nbsp;</div>
    <div class="hotspot pedestal3" on:click={showModal(section.hotspots.pedestal3)}>&nbsp;</div>
    <div class="hotspot hdisplay" on:click={showModal(section.hotspots.hdisplay)}>&nbsp;</div>
    <div class="ptext pedestal1">{section.hotspots.pedestal1.text}</div>
    <div class="ptext pedestal2">{section.hotspots.pedestal2.text}</div>
    <div class="ptext pedestal3">{section.hotspots.pedestal3.text}</div>
  </div>
  <div class="container video-content {displayImage}">
    <VideoPlayer { section } { handleVideoEnd } />
  </div>

</figure>
