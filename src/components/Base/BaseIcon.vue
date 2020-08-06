<template>
  <svg
    class="baseIcon"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :class="[getVariantClass, getClickableClass]"
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
    iconClickable: {
      type: Boolean,
      default: false
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
    getVariantClass() {
      if (this.variant) {
        return "baseIcon--" + this.variant;
      }
      return "";
    },
    getClickableClass() {
      if (this.iconClickable) {
        return "baseIcon--clickable";
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
.baseIcon--clickable,
.baseIcon--clickable * {
  cursor: pointer;
}
.baseIcon--primary svg {
  fill: var(--primary-lighter-color);
  color: var(--primary-lighter-color);
}
.baseIcon--primary:hover svg {
  color: var(--primary-color);
  fill: var(--primary-color);
}
.baseIcon--secondary svg {
  color: var(--secondary-color);
  fill: var(--secondary-color);
}
.baseIcon--secondary:hover svg {
  fill: var(--secondary-lighter-color);
  color: var(--secondary-lighter-color);
}
.baseIcon--default svg {
  color: var(--default-color);
  fill: var(--default-color);
}
.baseIcon--default:hover svg {
  fill: var(--default-lighter-color);
  color: var(--default-lighter-color);
}
</style>
