<script>
export default {
  name: 'AboutView',

  data() {
    return {
      // location content
      locations: Object.freeze([
        {
          img: './src/assets/img/about/desktop/illustration-uk.svg',
          country: 'United Kingdom',
          street: '68 Asfordby Rd',
          city: 'Alcaston',
          province: 'SY6 1YA',
          tel: '+44 1241 918425',
        },
        {
          img: './src/assets/img/about/desktop/illustration-canada.svg',
          country: 'Canada',
          street: '1528 Eglinton Avenue',
          city: 'Toronto',
          province: 'Ontario M4P 1A6',
          tel: '+1 416 485 2997',
        },
        {
          img: './src/assets/img/about/desktop/illustration-australia.svg',
          country: 'Australia',
          street: '36 Swanston Street',
          city: 'Kewell',
          province: 'Victoria',
          tel: '+61 4 9928 3629',
        },
      ]),
    };
  },
};
</script>

<template>
  <div class="about-container">
    <section class="hero-container">
      <picture>
        <source
          :srcset="`./src/assets/img/about/mobile/image-hero-whitecup.jpg`"
          media="(max-width: 600px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <source
          :srcset="`./src/assets/img/about/tablet/image-hero-whitecup.jpg`"
          media="(min-width: 601px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <source
          :srcset="`./src/assets/img/about/tablet/image-hero-whitecup.jpg`"
          media="(min-width: 1200px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <img
          :src="`./src/assets/img/home/desktop/image-hero-whitecup.jpg`"
          alt="decorative image of coffee"
          class="hero-img"
        />
      </picture>
      <div class="hero-content-container">
        <h1 class="main-about-heading">About Us</h1>
        <p class="main-about-paragraph">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
        <AppButton text="Create your own plan" class="hero-button" />
      </div>
    </section>

    <section class="commitment-container">
      <picture>
        <source
          :srcset="`./src/assets/img/about/mobile/image-commitment.jpg`"
          media="(max-width: 600px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <source
          :srcset="`./src/assets/img/about/tablet/image-commitment.jpg`"
          media="(min-width: 601px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <source
          :srcset="`./src/assets/img/about/tablet/image-commitment.jpg`"
          media="(min-width: 1200px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <img
          :src="`./src/assets/img/home/desktop/image-commitment.jpg`"
          alt="decorative image of coffee"
          class="commitment-img"
        />
      </picture>
      <h2 class="commitment-heading">Our commitment</h2>
      <p class="commitment-paragraph">
        We’re built on a simple mission and a commitment to doing good along the
        way. We want to make it easy for you to discover and brew the world’s
        best coffee at home. It all starts at the source. To locate the specific
        lots we want to purchase, we travel nearly 60 days a year trying to
        understand the challenges and opportunities in each of these places. We
        collaborate with exceptional coffee growers and empower a global
        community of farmers through with well above fair-trade benchmarks. We
        also offer training, support farm community initiatives, and invest in
        coffee plant science. Curating only the finest blends, we roast each lot
        to highlight tasting profiles distinctive to their native growing
        region.
      </p>
    </section>

    <section class="quality-container">
      <picture>
        <source
          :srcset="`./src/assets/img/about/mobile/image-quality.jpg`"
          media="(max-width: 600px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <source
          :srcset="`./src/assets/img/about/tablet/image-quality.jpg`"
          media="(min-width: 601px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <source
          :srcset="`./src/assets/img/about/tablet/image-quality.jpg`"
          media="(min-width: 1200px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <img
          :src="`./src/assets/img/home/desktop/image-quality.jpg`"
          alt="decorative image of coffee"
          class="quality-img"
        />
      </picture>
      <div class="quality-content-container">
        <h2 class="quality-heading">Uncompromising quality</h2>
        <p class="quality-paragraph">
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
    </section>

    <section class="headquarters-container">
      <h2 class="headquarters-heading">Our headquarters</h2>
      <div
        v-for="location in locations"
        :key="location"
        class="location-container"
      >
        <img :src="location.img" :alt="location.country" class="location-img" />
        <h3 class="location-heading">{{ location.country }}</h3>
        <p class="location-paragraph">
          {{ location.street }}<br />
          {{ location.city }}<br />
          {{ location.province }} <br />
          {{ location.tel }}<br />
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.main-about-heading {
  font-family: 'Fraunces', serif;
  font-size: 1.75rem;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  color: $light-cream;
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.main-about-paragraph {
  @include app-body;
  color: $light-cream;
  padding: 0 1.5rem 1.5rem 1.5rem;
  opacity: 0.8;
}

.commitment-container {
  text-align: center;
}

.commitment-img {
  background-color: $dark-cyan;
  border-radius: 0.5rem;
  margin-bottom: 3rem;
}

.commitment-heading {
  @include header-2;
  font-size: 2rem; // clamp later?
  color: $dark-grey-blue;
  margin-bottom: 1.88rem;
}

.commitment-paragraph {
  @include app-body;
  margin-bottom: 7.5rem;
}

.quality-container {
  text-align: center;
}

.quality-img {
  height: 9.75rem;
  background-color: $dark-cyan;
  border-radius: 0.5rem;
  z-index: 1;
}

.quality-content-container {
  min-height: 31.81rem;
  background-color: $dark-grey;
  position: relative;
  top: calc(-9.75rem / 2);
  z-index: -1;
  border-radius: 0.625rem;
  display: block;
}

.quality-heading {
  @include header-2;
  line-height: 1;
  padding-top: 8.875rem; // calc of parent plus 4rem
  color: $light-cream;
  margin: 0 1.5rem 1.5rem 1.5rem;
}

.quality-paragraph {
  @include app-body;
  color: $light-cream;
  padding: 0 1.5rem;
}

.headquarters-container {
  margin-bottom: 7.5rem;
  text-align: center;
}

.headquarters-heading {
  @include header-4;
  color: $grey;
  margin-bottom: 4.5rem;
}

.location-img {
  width: 3.067rem;
  margin-bottom: 3rem;
}

.location-heading {
  @include header-2;
  margin-bottom: 1.38rem;
}

.location-paragraph {
  @include app-body;
  margin-bottom: 5rem;
}
</style>
