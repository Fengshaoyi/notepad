function Editor () {
  this.$editor = $('<div class="editor"></div>');
  this.$textarea = $('<textarea spellcheck="false"></textarea>');
  this.init = function () {
    this.$editor.append(this.$textarea);
    
    return this.$editor;
  };

}


