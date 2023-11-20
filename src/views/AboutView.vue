<script>
export default {
  name: 'AboutView',

  data() {
    return {
      // location content
      locations: Object.freeze([
        {
          img: './img/about/desktop/illustration-uk.svg',
          country: 'United Kingdom',
          street: '68 Asfordby Rd',
          city: 'Alcaston',
          province: 'SY6 1YA',
          tel: '+44 1241 918425',
        },
        {
          img: './img/about/desktop/illustration-canada.svg',
          country: 'Canada',
          street: '1528 Eglinton Avenue',
          city: 'Toronto',
          province: 'Ontario M4P 1A6',
          tel: '+1 416 485 2997',
        },
        {
          img: './img/about/desktop/illustration-australia.svg',
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
    <section class="hero-container about-hero-container">
      <picture>
        <source
          :srcset="`./img/about/mobile/image-hero-whitecup.jpg`"
          media="(max-width: 600px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <source
          :srcset="`./img/about/tablet/image-hero-whitecup.jpg`"
          media="(max-width: 1100px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <source
          :srcset="`./img/about/desktop/image-hero-whitecup.jpg`"
          media="(min-width: 1200px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <img
          :src="`./img/home/desktop/image-hero-whitecup.jpg`"
          alt="decorative image of coffee"
          class="hero-img"
        />
      </picture>
      <div class="hero-content-container about-hero-content-container">
        <h1 class="main-about-heading">About Us</h1>
        <p class="main-about-paragraph">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </section>

    <section class="commitment-container">
      <picture>
        <source
          :srcset="`./img/about/mobile/image-commitment.jpg`"
          media="(max-width: 600px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <source
          :srcset="`./img/about/tablet/image-commitment.jpg`"
          media="(max-width: 1199px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <source
          :srcset="`./img/about/desktop/image-commitment.jpg`"
          media="(min-width: 1200px)"
          type="image/jpg"
          alt="decorative image of coffee"
        />
        <img
          :src="`./img/home/desktop/image-commitment.jpg`"
          alt="decorative image of coffee"
          class="commitment-img"
        />
      </picture>
      <div class="commitment-content-container">
        <h2 class="commitment-heading">Our commitment</h2>
        <p class="commitment-paragraph">
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </p>
      </div>
    </section>

    <section class="quality-container">
      <div class="quality-img-container">
        <picture>
          <source
            :srcset="`./img/about/mobile/image-quality.jpg`"
            media="(max-width: 600px)"
            type="image/jpg"
            alt="decorative image of coffee"
          />
          <source
            :srcset="`./img/about/tablet/image-quality.jpg`"
            media="(max-width: 1199px)"
            type="image/jpg"
            alt="decorative image of coffee"
          />
          <source
            :srcset="`./img/about/desktop/image-quality.jpg`"
            media="(min-width: 1200px)"
            type="image/jpg"
            alt="decorative image of coffee"
          />
          <img
            :src="`./img/home/desktop/image-quality.jpg`"
            alt="decorative image of coffee"
            class="quality-img"
          />
        </picture>
      </div>
      <div class="quality-background">
        <div class="quality-content-container">
          <h2 class="quality-heading">Uncompromising quality</h2>
          <p class="quality-paragraph">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </div>
    </section>

    <section class="headquarters-container">
      <h2 class="headquarters-heading">Our headquarters</h2>
      <div class="location-content-container">
        <div
          v-for="location in locations"
          :key="location"
          class="location-container"
        >
          <div class="location-img-continaer">
            <img
              :src="location.img"
              :alt="location.country"
              class="location-img"
            />
          </div>
          <h3 class="location-heading">{{ location.country }}</h3>
          <p class="location-paragraph">
            {{ location.street }}<br />
            {{ location.city }}<br />
            {{ location.province }} <br />
            {{ location.tel }}<br />
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.about-hero-container {
  min-height: 25rem;

  @include desktop-breakpoint {
    min-height: 28.125rem;
  }
}

.about-hero-content-container {
  padding: 0 1.5rem;

  @include tablet-breakpoint {
    padding-left: 3.62rem;
  }

  @include desktop-breakpoint {
    padding-left: 5.31rem;
  }
}

.main-about-heading {
  font-family: 'Fraunces 9pt Black', serif;
  font-size: 1.75rem;
  font-weight: 900;
  line-height: 1;
  color: $light-cream;
  padding: 0 1.5rem 1.5rem 1.5rem;

  @include tablet-breakpoint {
    padding-left: 0 !important;
  }

  @include desktop-breakpoint {
    font-size: 2.5rem;
  }
}

.main-about-paragraph {
  @include app-body;
  color: $light-cream;
  opacity: 0.8;

  @include tablet-breakpoint {
    max-width: 24.875rem;
  }

  @include desktop-breakpoint {
    font-size: 1rem;
    max-width: 27.8125rem;
  }
}

.commitment-container {
  text-align: center;

  @include tablet-breakpoint {
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @include desktop-breakpoint {
    padding: 0 5.31rem;
    margin-bottom: 7.5rem;
  }
}

.commitment-img {
  background-color: $dark-cyan;
  border-radius: 0.5rem;
  margin-bottom: 3rem;

  @include tablet-breakpoint {
    margin-bottom: 0;
  }
}

.commitment-content-container {
  margin-bottom: 7.5rem;

  @include tablet-breakpoint {
    margin-bottom: 10.5rem;
  }

  @include desktop-breakpoint {
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.commitment-heading {
  @include header-2;
  font-size: 2rem; // clamp later?
  color: $dark-grey-blue;
  margin-bottom: 1.88rem;
}

.commitment-paragraph {
  @include app-body;

  @include desktop-breakpoint {
    font-size: 1rem;
    line-height: 1.625;
  }
}

.quality-container {
  text-align: center;

  @include desktop-breakpoint {
    /* since we're using postion relative on image; pushes whitespace below */
    margin-bottom: -10.5rem;
  }
}

.quality-img-container {
  @include desktop-breakpoint {
    display: flex;
    justify-content: flex-end;
    margin-right: 5rem;
  }
}

.quality-img {
  height: 9.75rem;
  background-color: $dark-cyan;
  border-radius: 0.5rem;
  z-index: 1;

  @include tablet-breakpoint {
    height: 20rem;
  }

  @include desktop-breakpoint {
    height: 29.625rem;
  }
}

.quality-background {
  min-height: 31.81rem;
  background-color: $dark-grey;
  position: relative;
  /* calc of image above height */
  top: calc(-9.75rem / 2);
  z-index: -1;
  border-radius: 0.625rem;
  display: block;

  @include tablet-breakpoint {
    min-height: 30.5rem;
    /* calc of image above height */
    top: calc(-20rem / 2);
  }

  @include desktop-breakpoint {
    min-height: 29.625rem;
    /* calc of image above height */
    top: calc(29.625rem / -1.25);
  }
}

.quality-content-container {
  @include desktop-breakpoint {
    max-width: 33.75rem;
    text-align: left;
    margin-left: 5.31rem;
  }
}

.quality-heading {
  @include header-2;
  line-height: 1;
  padding-top: 8.875rem; // calc of parent plus 4rem
  color: $light-cream;
  margin: 0 1.5rem 1.5rem 1.5rem;

  @include tablet-breakpoint {
    padding-top: 14rem;
  }

  @include desktop-breakpoint {
    margin: 0 0 2.5rem 0;
    padding-top: 6.25rem;
  }
}

.quality-paragraph {
  @include app-body;
  color: $light-cream;
  padding: 0 1.5rem;

  @include tablet-breakpoint {
    padding: 0 4.62rem;
  }

  @include desktop-breakpoint {
    padding: 0;
    font-size: 1rem;
    line-height: 1.625;
  }
}

.headquarters-container {
  margin-bottom: 7.5rem;
  text-align: center;

  @include tablet-breakpoint {
    margin-bottom: 9rem;
    text-align: left;
  }

  @include desktop-breakpoint {
    margin: 0 5.31rem 10.5rem 5.31rem;
  }
}

.location-content-container {
  @include tablet-breakpoint {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.62rem;
  }

  @include desktop-breakpoint {
    grid-gap: 5.94rem;
  }
}

.headquarters-heading {
  @include header-4;
  color: $grey;
  margin-bottom: 4.5rem;
}

.location-img-container {
  @include tablet-breakpoint {
    height: 6.13rem;
  }
}

.location-img {
  margin-bottom: 3rem;
}

.location-heading {
  @include header-2;
  margin-bottom: 1.38rem;
  min-height: 4.75rem;

  @include desktop-breakpoint {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    line-height: 1.125;
  }
}

.location-paragraph {
  @include app-body;
  margin-bottom: 5rem;

  @include desktop-breakpoint {
    font-size: 1rem;
    line-height: 1.625;
  }
}
</style>
