<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-125083838-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-125083838-1');
</script>
</svelte:head>

<style type="scss">
  @import "../style/global.scss";

.main {
  font-family: 'Trade Gothic';
  position: relative;
  width: 100%;
  margin: 0;
  padding: 1px;
  box-sizing: border-box;
  text-align: center;
  background-color: #131218;
}
</style>

<Nav/>

<main class="main">
	<slot></slot>
</main>

<Footer/>
