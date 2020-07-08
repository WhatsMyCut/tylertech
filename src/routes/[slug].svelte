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
  import Modal from "../components/Modal/Modal.svelte";
  import Figure from "./_Figure.svelte";

  // import { getContext } from 'svelte';
  export let section;
</script>

<style type="text/sass">
  @import '../style/global.scss';
</style>


<svelte:head>
	<title>Tyler Technologies Booth: {section.title}</title>
</svelte:head>


<Modal>
  <Figure { section } />
</Modal>
