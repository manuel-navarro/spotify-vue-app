<template>
  <svg
    class="baseIcon"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :class="getVariant"
    viewBox="0 0 18 18"
    :aria-labelledby="iconName"
    role="presentation"
    @click="handleClick"
  >
    <title :id="iconName" lang="en">{{ iconTitle }}</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    iconTitle: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String,
      default: "currentColor"
    },
    width: {
      type: [Number, String],
      default: 12
    },
    height: {
      type: [Number, String],
      default: 12
    },
    variant: {
      type: String,
      default: "" // primary, secondary or default
    }
  },
  methods: {
    handleClick() {
      this.$emit("click-icon");
    }
  },
  computed: {
    getVariant() {
      if (this.variant) {
        return "baseIcon--" + this.variant;
      }
      return "";
    }
  }
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px;
}
.baseIcon--primary svg {
  fill: var(--primary-lighter-color);
}
.baseIcon--primary:hover svg {
  fill: var(--primary-color);
}
.baseIcon--secondary svg {
  fill: var(--secondary-color);
}
.baseIcon--secondary:hover svg {
  fill: var(--secondary-lighter-color);
}
.baseIcon--default svg {
  fill: var(--default-color);
}
.baseIcon--default:hover svg {
  fill: var(--default-lighter-color);
}
</style>
