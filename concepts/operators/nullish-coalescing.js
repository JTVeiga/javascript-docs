const obj = {
  a: undefined || "hey!", // underfined, null, "", etc
  b: undefined ?? "hey!", // only undefined and null shorts circuit to the right side
};
