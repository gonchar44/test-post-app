<template>
  <button class="arrow-btn-c"
          :class="{ 'right-arrow-c': type === 'right' }"
  >
    <span class="arrow-btn-c__line"></span>
    <span class="arrow-btn-c__line"></span>
  </button>
</template>

<script>
  export default {
    name: 'ArrowBtn',
    props: {
      type: String,
    },
  }
</script>

<style>
.arrow-btn-c {
  width: 25px;
  height: 25px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 11px 5px rgba(0, 0, 0, .29);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: .4;
  transition: opacity .15s ease-in-out;
}
.arrow-btn-c:hover {
  opacity: 8;
}
.arrow-btn-c__line {
  width: 9px;
  height: 2px;
  background: #000;
}
.arrow-btn-c__line:first-child {
  transform: rotate(-40deg);
}
.arrow-btn-c__line:last-child {
  transform: rotate(40deg);
  margin-top: 3px;
}

.right-arrow-c {
  transform: translateY(-50%) rotate(180deg);
}

@media only screen and (max-width: 400px) {
  .arrow-btn-left,
  .arrow-btn-right {
    display: none;
  }
}
</style>
