for (let i=1; i<17;++i)
{
    
    const container = document.querySelector('.container');
    const column = document.createElement('div');
    column.classList.add('column');
    container.appendChild(column);
    
    for (let j=1; j<17;++j)
    {
        
        const row = document.createElement('div');
        row.classList.add('row');
        column.appendChild(row);
    }
}
