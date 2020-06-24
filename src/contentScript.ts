// Changing Style from contentScript
// document.body.style.color = 'white';
// document.body.style.backgroundColor = 'black';

const anchorMyBtn = document.createElement('a');
anchorMyBtn.innerText = 'MY BUTTON';
anchorMyBtn.classList.add('btn', 'ml-2');
anchorMyBtn.href = 'https://google.es/';
anchorMyBtn.target = '_blank';

const masterBranchBtn = document.querySelector('#branch-select-menu');
masterBranchBtn.parentNode.insertBefore(anchorMyBtn, masterBranchBtn.nextSibling);

try {
    const authorAnchor = document.querySelector('.commit-author') as HTMLAnchorElement;
    const commit = (authorAnchor.nextElementSibling as HTMLAnchorElement).href.split('commit/')[1];

    const p = document.createElement('p');
    p.classList.add('my-commit-msg');
    p.innerText = `Latest commit was: ${commit}`;
    anchorMyBtn.parentNode.parentNode.prepend(p);

} catch {
    console.error('Error retrieving last commit');
}
