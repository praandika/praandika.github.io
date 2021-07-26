$(document).ready(function(){
    $("#add").click(function(){
        $(".add-list").show();
    });
});

$(document).mouseup(function(e) {
    var container = $(".add-list");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
    }
});

$(document).ready(function(){
    $("#jawabSingkat").click(function(){
      $(".setup").append(`
        <div class="content" id="addjawabSingkat">
            <div class="line"></div>
            <div class="bungkus-content edit">
                <p>*Pertanyaan Singkat</p>
                <input type="text" name="tanya" id="tanya" class="text" placeholder="Masukan pertanyaan untuk jawaban singkat">
                <!-- Pratinjau kolom jawaban -->
                <input type="text" name="jawab" id="jawab" class="pratinjau" placeholder="Teks jawaban singkat" disabled>

                <div class="control-edit">
                    <button class="copy"><i class="fas fa-clone"></i></button>
                    <button id="remove"><i class="fas fa-trash"></i></button>
                    <span class="divider">|</span>
                    <span class="wajib"><input type="checkbox" id="wajib-js1" name="wajib" class="wajib"><label for="wajib-js1" class="wajib">Wajib diisi</label></span>
                </div>
            </div>
        </div>
      `);

      $(".add-list").hide();
    });
  
});

$(document).ready(function(){
    $("#remove").live("click", function(){
      $(this).remove();
    });
  });