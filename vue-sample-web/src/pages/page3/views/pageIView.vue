<template>
  <div class="pageIview">
    <h1>You can drag the blue circle from left to right</h1>
    <div id="drag-drop-basic">
    <div id="source-container">
      <div id="drag-source" draggable="true"></div>
    </div>
    <div id="target-container"></div>
</div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style>
/**
 * Drag and Drop Basic
 **/
[draggable='true'] {
  /*
 To prevent user selecting inside the drag source
*/
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

#drag-drop-basic {
  display: flex;
}
#drag-drop-basic #source-container {
  height: 400px;
  border: 2px solid #ccc;
  flex: 1;
  margin: 1rem;
}
#drag-drop-basic #target-container {
  height: 400px;
  border: 2px solid #ccc;
  flex: 1;
  margin: 1rem;
}
#drag-drop-basic #drag-source {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: steelblue;
}
</style>
