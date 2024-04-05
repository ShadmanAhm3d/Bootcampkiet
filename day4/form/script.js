function submitForm(e) {
  e.preventDefault();
  const t = e.target;

  /* console.log(
    t
  ) */
  const res = {
    hobbies: [],
  }
  for (let i = 0; i < t.length; i++) {
    const ty = t[i].type;
    const vl = t[i].value;
    const name = t[i].name;
    /* console.log(
      ty, vl, name
    ) */
    if (ty == 'checkbox' && t[i].checked) {
      res.hobbies.push(vl)
    }

    if (ty !== 'checkbox') {
      res[name] = vl;
    }
  }
  console.log(res)
}


