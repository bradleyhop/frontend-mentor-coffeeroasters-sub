<script>
export default {
  name: 'ListNav',
};
</script>

<template>
  <nav class="list-nav-container">
    <ul class="list-nav-list">
      <li class="list-nav-item">
        <RouterLink to="/" class="list-nav-link">Home</RouterLink>
      </li>
      <li class="list-nav-item">
        <RouterLink to="/about" class="list-nav-link">About Us</RouterLink>
      </li>
      <li class="list-nav-item">
        <RouterLink to="/createplan" class="list-nav-link">
          Create Your Plan
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.list-nav-list {
  display: flex;
  color: $grey;
  font-family: 'Barlow', serif;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.05769rem;
  text-transform: uppercase;
}

.list-nav-item:hover {
  color: $dark-grey-blue;
}

.list-nav-link {
  margin-left: 2.06rem;
}
</style>
