<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`sections.json`).then(r => r.json()).then(sections => {
			return { sections };
		});
	}
</script>

<script>
	export let sections;
</script>

<style>
  .toc {
    width: 100%;
    height: auto;
    background-color: white;
    padding: 2rem;
  }
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
    list-style-type: none;
	}
</style>

<svelte:head>
	<title>Tyler Technologies Booth: Home</title>
</svelte:head>

<div class="toc">
<h1>Sections</h1>

<ul>
	{#each sections as section}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='/{section.slug}'>{section.title}</a></li>
	{/each}
</ul>
</div>
