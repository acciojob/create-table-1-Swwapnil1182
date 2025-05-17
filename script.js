function insert_Row() {
    //Write your code here

	const sampleTable=document.getElementById("sampleTable")
	const row=document.createElement('tr')

	row.innerHTML=
		`
		<td>New cell1</td>
		<td>New cell2</td>
		`

	
	sampleTable.insertAdjacentElement('afterbegin',row)
  
  
}
