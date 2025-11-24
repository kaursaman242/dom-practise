const root=document
const html=root.children[0]
const head=html.children[0]
const title=head.children[2]
title.textContent="DOM Practise"
const body=html.children[1]

const navBar=root.getElementsByClassName("nav-bar")
navBar.style.width="100%"
navBar.style.height="30px"
navBar.style.backgroundColor="black"

body.appendChild(navBar)

const ulElement=root.getElementsByClassName("unordered-list")
ulElement.style.display="flex"
ulElement.style.listStyle="none"
ulElement.style.justifyContent="space-around"
ulElement.style.alignContent="center"

const liElement1=root.createElement("li")
const liElement2=root.createElement("li")
const liElement3=root.createElement("li")
const liElement4=root.createElement("li")

liElement1.textContent="Home"
liElement2.textContent="About us"
liElement3.textContent="Blog"
liElement4.textContent="Contact us"

navBar.append(ulElement)
ulElement.append(liElement1)
ulElement.append(liElement2)
ulElement.append(liElement3)
ulElement.append(liElement4)










