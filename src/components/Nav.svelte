<script>
  export let segment;
</script>

<style type="text/sass">
  @import './Nav.scss';
</style>

<nav>
  <ul class="tester">
    <li><img class="logo" src="/tylertech_logo.png" alt="Tyler Technologies" /></li>
    <li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
    <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">video</a></li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
         the blog data when we hover over the link or tap it on a touchscreen -->
    <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
  </ul>
</nav>
