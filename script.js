function insert_Row() {
    const table = document.getElementById("sampleTable");

    // Create new row and cells
    const newRow = document.createElement("tr");

    const newCell1 = document.createElement("td");
    newCell1.textContent = "New Cell1";

    const newCell2 = document.createElement("td");
    newCell2.textContent = "New Cell2";

    // Append cells to the new row
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);

    // Insert new row at the top
    table.insertBefore(newRow, table.firstChild);























	

	/*const sampleTable=document.getElementById("sampleTable")
	const row=document.createElement('tr')

	row.innerHTML=
		
		<td>New Cell1</td>
		<td>New Cell2</td>
		

	
	sampleTable.insertAdjacentElement('afterbegin',row)*/
}
