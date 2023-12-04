<script>
// coffee collection as list; more prone to future changes
import coffees from '@/assets/data/coffeeCollection.js';
// how it works steps block
import HowItWorksCards from '@/components/blocks/HowItWorksCards.vue';

export default {
  name: 'HomeView',

  components: {
    HowItWorksCards,
  },

  data() {
    return {
      coffeCollection: Object.freeze(coffees),
      // why us card content
      benefits: Object.freeze([
        {
          img: 'icon-coffee-bean.svg',
          title: 'Best quality',
          copy: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
        },
        {
          img: 'icon-gift.svg',
          title: 'Exclusive benefits',
          copy: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
        },
        {
          img: 'icon-truck.svg',
          title: 'Free shipping',
          copy: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
        },
      ]),
    };
  },
};
</script>

<template>
  <div class="home-container">
    <section class="hero-container">
      <picture>
        <source
          :srcset="`./img/home/mobile/image-hero-coffeepress.jpg`"
          media="(max-width: 600px)"
          type="image/jpg"
        />
        <source
          :srcset="`./img/home/tablet/image-hero-coffeepress.jpg`"
          media="(max-width: 1199px)"
          type="image/jpg"
        />
        <source
          :srcset="`./img/home/desktop/image-hero-coffeepress.jpg`"
          media="(min-width: 1200px)"
          type="image/jpg"
        />
        <img
          :src="`./img/home/desktop/image-hero-coffeepress.jpg`"
          alt="decorative image of coffee"
          class="hero-img"
        />
      </picture>
      <div class="hero-content-container">
        <h1 class="main-heading">Great coffee made simple.</h1>
        <p class="main-paragraph">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisa coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <div class="call-to-action-button-container">
          <RouterLink to="/createplan" class="app-button">
            Create your plan
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="collection-container">
      <div class="collection-heading-container">
        <h2 class="collection-heading">our collection</h2>
      </div>
      <div class="coffee-card-container">
        <div
          v-for="coffee in coffeCollection"
          :key="coffee.name"
          class="coffee-card"
        >
          <div class="coffee-img-container">
            <img
              :src="`./img/home/desktop/${coffee.src}`"
              alt="decorative image of coffee"
              class="coffee-img"
            />
          </div>
          <div class="coffee-collection-content">
            <h3 class="coffee-name">{{ coffee.name }}</h3>
            <p class="coffee-copy">{{ coffee.copy }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="why-us-container">
      <div class="why-us-background">
        <div class="why-us-content-container">
          <h2 class="why-us-heading">Why choose us?</h2>
          <p class="why-us-paragraph">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
          <div class="benefit-card-container">
            <div
              v-for="benefit in benefits"
              :key="benefit.title"
              class="benefit-card"
            >
              <div class="benefit-img-container">
                <img
                  :src="`./img/home/desktop/${benefit.img}`"
                  :alt="benefit.title"
                  class="benefit-img"
                />
              </div>
              <div class="benefit-content">
                <h3 class="benefit-title">{{ benefit.title }}</h3>
                <p class="benefit-copy">{{ benefit.copy }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="how-it-works-container">
      <h2 class="how-it-works-heading">How it works</h2>
      <HowItWorksCards />
      <div class="how-it-works-button-container">
        <RouterLink to="/createplan" class="app-button">
          Create your plan
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.home-container {
  margin-bottom: 7.5rem;

  @include tablet-breakpoint {
    margin-bottom: 9rem;
  }

  @include desktop-breakpoint {
    margin-bottom: 12.5rem;
  }
}

.main-heading {
  @include header-1;
  color: $light-cream;
  padding: 0 1.5rem 1.5rem 1.5rem;

  @include tablet-breakpoint {
    max-width: 25rem;
    padding: 0 0 1.5rem 0;
  }

  @include desktop-breakpoint {
    max-width: 35rem;
    padding-bottom: 2rem;
  }
}

.main-paragraph {
  @include app-body;
  color: $light-cream;
  padding: 0 1.5rem 1.5rem 1.5rem;
  opacity: 0.8;

  @include tablet-breakpoint {
    max-width: 24.875rem;
    padding: 0 0 1.5rem 0;
  }

  @include desktop-breakpoint {
    font-size: 1rem;
    max-width: 27.8rem;
    padding-bottom: 3.5rem;
  }
}

.collection-container {
  text-align: center;

  @include desktop-breakpoint {
    padding: 0 5.25rem;
  }

  @include desktop-breakpoint {
    padding-bottom: 6.5rem;
  }
}

.collection-heading-container {
  min-height: 4.5rem;

  @include desktop-breakpoint {
    min-height: 12.25rem;
  }
}

.collection-heading {
  font-family: 'Fraunces 9pt Black', serif;
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(180deg, $grey 0%, $light-cream 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @include tablet-breakpoint {
    font-size: 6rem;
  }

  @include desktop-breakpoint {
    font-size: 8rem;
  }

  @include large-desktop-breakpoint {
    font-size: 9.375rem;
  }
}

.coffee-card-container {
  @include tablet-breakpoint {
    position: relative;
    top: -2.75rem;
  }

  @include desktop-breakpoint {
    top: -5.5rem;
    display: flex;
    gap: 1.88rem;
  }

  @include large-desktop-breakpoint {
    top: -5rem;
  }
}

.coffee-card {
  @include tablet-breakpoint {
    display: flex;
    justify-content: center;
    min-height: 12rem;
    margin-bottom: 2rem;
  }

  @include desktop-breakpoint {
    display: initial;
  }
}

.coffee-img-container {
  height: 8rem;
  width: auto;

  @include tablet-breakpoint {
    height: 12rem;
  }

  @include desktop-breakpoint {
    margin-bottom: 4.47rem;
  }
}

.coffee-collection-content {
  @include tablet-breakpoint {
    text-align: left;
    margin-left: 2.25rem;
  }

  @include desktop-breakpoint {
    text-align: center;
    margin-left: 0;
  }
}

.coffee-name {
  @include header-4;
  margin-bottom: 1rem;

  @include tablet-breakpoint {
    margin-top: 1.85rem;
    margin-bottom: 1.5rem;
  }

  @include desktop-breakpoint {
    margin-top: 0;
  }
}

.coffee-copy {
  @include app-body;
  width: 17.6rem;
  margin: 0 auto 3rem auto;

  @include desktop-breakpoint {
    margin: auto;
  }

  @include desktop-breakpoint {
    width: auto;
    text-align: center;
  }
}

.why-us-container {
  /* pushes next section down */
  min-height: calc(56.375rem * 1.85);

  @include tablet-breakpoint {
    min-height: calc(53.9375rem * 1.2);
  }

  @include tablet-breakpoint {
    min-height: calc(63.8125rem - 5rem);
  }
}

.why-us-background {
  height: 56.375rem;
  background-color: $dark-grey;
  border-radius: 0.625rem;

  @include tablet-breakpoint {
    height: 35.81rem;
  }

  @include desktop-breakpoint {
    height: 36.0625rem;
  }
}

.why-us-content-container {
  /* overlays content on top of background */
  padding: 4rem 1.5rem;
  text-align: center;

  @include tablet-breakpoint {
    padding: 3.5rem 4rem;
  }

  @include desktop-breakpoint {
    padding-top: 6.25rem;
    padding-bottom: 5.38rem;

    & > p {
      font-size: 1rem;
      line-height: 1.625;
    }
  }
}

.why-us-heading {
  @include header-2;
  color: $light-cream;
  margin-bottom: 1.5rem;

  @include tablet-breakpoint {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
}

.why-us-paragraph {
  @include app-body;
  color: $light-cream;
  margin-bottom: 4rem;

  @include tablet-breakpoint {
    padding: 0 1.5rem;
  }

  @include desktop-breakpoint {
    padding: 0;
    width: 33.75rem;
    margin: auto;
    margin-bottom: 5.38rem;
  }
}

.benefit-card-container {
  @include desktop-breakpoint {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.88rem;
    padding: 0 5rem;
  }
}

.benefit-card {
  background-color: $dark-cyan;
  border-radius: 0.5rem;
  color: $light-cream;
  min-height: 23.875rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1.5rem;

  @include tablet-breakpoint {
    flex-direction: row;
    min-height: 11.25rem;
    padding: 0;
  }

  @include desktop-breakpoint {
    flex-direction: column;
    min-height: 23.875rem;
  }
}

.benefit-img-container {
  width: 4.5rem;
  height: 4.5rem;
  margin-bottom: 3.5rem;
  display: flex;
  align-items: center;

  @include tablet-breakpoint {
    width: 3.5rem;
    margin-bottom: 0;
    margin-left: 4.88rem;
  }

  @include desktop-breakpoint {
    width: 4.5rem;
    margin-left: 0;
    margin-bottom: 3.5rem;
  }
}

.benefit-content {
  @include tablet-breakpoint {
    text-align: left;
    padding-left: 3.44rem;
    padding-right: 3rem;
  }

  @include desktop-breakpoint {
    text-align: center;
    padding: 0;
  }
}

.benefit-title {
  @include header-4;
  margin-bottom: 1.5rem;

  @include tablet-breakpoint {
    margin-bottom: 1rem;
  }
}

.benefit-copy {
  @include app-body;

  @include desktop-breakpoint {
    padding: 0 3rem;
  }
}

.how-it-works-heading {
  @include header-2;
  color: $grey;
  margin-bottom: 5rem;

  @include tablet-breakpoint {
    font-size: 1.5rem;
  }
}

.how-it-works-button-container {
  margin-top: 2.5rem;

  @include desktop-breakpoint {
    margin-top: 5rem;
  }
}

.how-it-works-container {
  text-align: center;

  @include tablet-breakpoint {
    text-align: left;
  }

  @include desktop-breakpoint {
    padding: 0 5rem;
  }
}
</style>
