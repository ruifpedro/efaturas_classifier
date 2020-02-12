var listaPendencias = document.getElementById("listaPendencias")
var cnodes2 = listaPendencias.childNodes[2]
var cnodes2_children = cnodes2.childNodes

for (node_number in cnodes2_children){
  if (cnodes2_children.hasOwnProperty(node_number)){
    var comerciante = cnodes2_children[node_number].childNodes[0].innerHTML
    var div_btn_group = cnodes2_children[node_number].childNodes[5].childNodes[1]

    for (entry_number in div_btn_group.childNodes){
      var entry = div_btn_group.childNodes[entry_number]
      if (entry.value != undefined) {
        var act_type = entry.value
        if (comerciante == "503819999 - Sector Mais Serviços Globais Em Alimentação Lda" && act_type == "C03"){
          entry.click()
        }
        if (comerciante == "502001607 - Supermercado Novo Oriente Lda" && act_type == "C03"){
          entry.click()
        }
        if (comerciante == "503074586 - Spdad Soc Portuguesa de Distribuição de Artigos de Desporto Unipessoal Lda" && act_type == "C99"){
          entry.click()
        }
        if (comerciante == "502011475 - Modelo Continente Hipermercados Sa" && act_type == "C03"){
          entry.click()
        }
        if (comerciante == "500829993 - Pingo Doce Distribuicao Alimentar Sa" && act_type == "C03"){
          entry.click()
        }
        if (comerciante == "503003808 - Dia Portugal Supermercados Sociedade Unipessoal Lda" && act_type == "C03"){
          entry.click()
        }
        if (comerciante == "502607920 - Auchan Retail Portugal, S.A." && act_type == "C03"){
          entry.click()
        }
        if (comerciante == "500498601 - Cp - Comboios de Portugal, Epe" && act_type == "C10"){
          entry.click()
        }
      }
    }
  }
}