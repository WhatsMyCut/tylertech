<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment;
</script>

<style global type="text/sass">
  @import "../style/global.scss";

  .main {
    font-family: 'Trade Gothic';
    position: relative;
    max-width: 100%;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
    text-align: center;
  }
</style>

<Nav {segment}/>

<main class="main">
	<slot></slot>
</main>

<Footer {segment} />
