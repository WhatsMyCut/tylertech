<script>
  import { getContext } from 'svelte';
  import VideoPlayer from '../components/VideoPlayer.svelte';
  import ModalContent from '../components/Modal/ModalContent.svelte';
  export let section;
  let ended = false;
  let displayVideo;
  let displayImage;
  let background = section.background;
  let icon = section.icon;
  let message;
  let content;
  let buttonText;
  let buttonIcon;
  let buttonOnClick;

  const { open } = getContext('simple-modal');
	const showModal = (hotspot) => {
    message = hotspot.text;
    content = hotspot.content || '';
    buttonText =  hotspot.buttonText || '';
    buttonIcon = hotspot.buttonIcon || '';
    buttonOnClick = () => openLink(hotspot.URL || '');
    console.log('showModal', {message, content, buttonText, buttonIcon, buttonOnClick})
		open(ModalContent, { message, buttonText, buttonIcon, buttonOnClick, content });
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
  @import './_Figure.scss';
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
