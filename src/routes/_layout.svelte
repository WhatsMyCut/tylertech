<script>
	import Nav from '../components/Nav.svelte';
	export let segment;
</script>

<svelte:head>
<style lang=”scss” global>
  @import "./style/global.scss";
</style>
</svelte:head>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
