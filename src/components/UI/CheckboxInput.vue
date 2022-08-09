<template>
  <div id="eco-input" class="input">
    <label class="container">
      {{ label }}
      <input type="checkbox" v-model="inputVal" :value="valueModel" />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    value: {
      required: true, // V-model default prop
    },
    valueModel: {
      required: true, // V-model assigned value
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style lang="scss">
#eco-input.input {
  .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 5px;
    margin-top: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    line-height: 1.5rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: auto;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      &:checked ~ .checkmark {
        background-color: var(--base-color);
        border: none;

        &:before,
        &:after {
          display: block;
        }
      }
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    margin: 0;
    border: 1px solid #999;

    &:before,
    &:after {
      content: "";
      position: absolute;
      display: none;
      box-sizing: initial;
    }
  }

  &__radio {
    .checkmark {
      &:before {
        top: 1px;
        left: 1px;
        width: 23px;
        height: 23px;
        background: white;
      }

      &:after {
        top: 4px;
        left: 4px;
        width: 17px;
        height: 17px;
        background: var(--base-color);
      }
    }
  }

  &__checkbox {
    .checkmark {
      &:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
}

.lang-ar {
  #eco-input.input {
    .container {
      padding-left: 0;
      padding-right: 35px;
    }

    .checkmark {
      right: 0;
    }
  }
}
</style>
