var findMinHeightTrees = function(n, edges) {
  if (n === 0) return [];
  var map = [], max, min = n * 2, maxArr = [], result = [];
  var i, j, k, len, tmp;
  for (i = 0; i < n; ++i) {
    tmp = [];
    for (j = 0; j < n; ++j) {
      tmp.push(i === j ? 0 : n * 2);
    }
    map.push(tmp);
  }
  for (i = 0, len = edges.length; i < len; ++i) {
    map[edges[i][0]][edges[i][1]] = 1;
    map[edges[i][1]][edges[i][0]] = 1;
  }
  
  for (i = 0; i < n; ++i) {
    max = 0;
    for (j = 0; j < n; ++j) {
      if (j < i) map[i][j] = map[j][i];
      else if (j > i) {
        for (k = 0; k < n; ++k) {
          if (map[i][k] + map[k][j] <= map[i][j]) map[i][j] = map[i][k] + map[k][j];
        }
      }
      max = Math.max(max, map[i][j]);
    }
    maxArr.push(max);
    if (max < min) min = max;
  }
  
  for (i = 0; i < n; ++i) {
    if (maxArr[i] === min) result.push(i);
  }
  
  return result;
};

console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]));
console.log(findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]));
console.log(findMinHeightTrees(1, [[0, 0]]));
console.log(findMinHeightTrees(399,
[[0,1],[0,2],[2,3],[3,4],[4,5],[1,6],[1,7],[5,8],[2,9],[7,10],[8,11],[8,12],[3,13],[6,14],[13,15],[4,16],[14,17],[14,18],[9,19],[12,20],[6,21],[14,22],[8,23],[20,24],[13,25],[21,26],[6,27],[15,28],[16,29],[27,30],[21,31],[9,32],[13,33],[15,34],[26,35],[19,36],[16,37],[14,38],[13,39],[11,40],[5,41],[7,42],[33,43],[19,44],[2,45],[26,46],[42,47],[21,48],[10,49],[18,50],[8,51],[19,52],[22,53],[47,54],[47,55],[19,56],[5,57],[49,58],[42,59],[13,60],[36,61],[22,62],[43,63],[2,64],[41,65],[32,66],[33,67],[64,68],[32,69],[26,70],[52,71],[52,72],[4,73],[29,74],[26,75],[5,76],[28,77],[29,78],[2,79],[63,80],[72,81],[62,82],[68,83],[33,84],[23,85],[17,86],[22,87],[22,88],[4,89],[41,90],[29,91],[31,92],[24,93],[1,94],[45,95],[60,96],[28,97],[46,98],[27,99],[32,100],[75,101],[2,102],[12,103],[67,104],[19,105],[96,106],[101,107],[17,108],[78,109],[18,110],[24,111],[95,112],[106,113],[102,114],[55,115],[78,116],[76,117],[91,118],[19,119],[89,120],[64,121],[49,122],[107,123],[18,124],[93,125],[79,126],[51,127],[97,128],[112,129],[82,130],[116,131],[4,132],[105,133],[104,134],[117,135],[19,136],[13,137],[134,138],[92,139],[111,140],[87,141],[36,142],[106,143],[91,144],[21,145],[127,146],[17,147],[58,148],[13,149],[88,150],[66,151],[136,152],[48,153],[104,154],[7,155],[97,156],[76,157],[36,158],[152,159],[116,160],[39,161],[130,162],[119,163],[162,164],[128,165],[57,166],[17,167],[25,168],[166,169],[31,170],[160,171],[16,172],[105,173],[24,174],[130,175],[133,176],[143,177],[41,178],[137,179],[10,180],[151,181],[22,182],[101,183],[86,184],[82,185],[42,186],[85,187],[96,188],[165,189],[73,190],[40,191],[95,192],[192,193],[93,194],[170,195],[168,196],[182,197],[176,198],[142,199],[169,200],[168,201],[1,202],[148,203],[35,204],[54,205],[132,206],[103,207],[2,208],[81,209],[161,210],[95,211],[133,212],[43,213],[63,214],[15,215],[185,216],[20,217],[161,218],[28,219],[196,220],[71,221],[92,222],[151,223],[207,224],[42,225],[31,226],[6,227],[33,228],[207,229],[29,230],[143,231],[231,232],[38,233],[62,234],[176,235],[4,236],[92,237],[32,238],[66,239],[6,240],[121,241],[116,242],[49,243],[224,244],[189,245],[28,246],[157,247],[115,248],[20,249],[239,250],[106,251],[172,252],[242,253],[48,254],[234,255],[140,256],[40,257],[157,258],[236,259],[198,260],[62,261],[179,262],[78,263],[22,264],[91,265],[254,266],[60,267],[243,268],[100,269],[207,270],[194,271],[84,272],[87,273],[166,274],[234,275],[133,276],[130,277],[23,278],[97,279],[169,280],[29,281],[232,282],[254,283],[168,284],[126,285],[284,286],[59,287],[77,288],[173,289],[79,290],[254,291],[273,292],[208,293],[288,294],[109,295],[139,296],[231,297],[91,298],[210,299],[81,300],[268,301],[225,302],[296,303],[241,304],[60,305],[90,306],[284,307],[130,308],[297,309],[218,310],[209,311],[70,312],[252,313],[188,314],[175,315],[172,316],[275,317],[313,318],[117,319],[291,320],[178,321],[11,322],[141,323],[173,324],[75,325],[165,326],[77,327],[106,328],[191,329],[217,330],[74,331],[129,332],[124,333],[242,334],[161,335],[289,336],[138,337],[101,338],[257,339],[162,340],[154,341],[110,342],[126,343],[152,344],[312,345],[317,346],[147,347],[145,348],[328,349],[314,350],[276,351],[238,352],[164,353],[161,354],[347,355],[158,356],[187,357],[325,358],[113,359],[207,360],[276,361],[92,362],[313,363],[147,364],[88,365],[307,366],[96,367],[328,368],[187,369],[99,370],[13,371],[262,372],[248,373],[247,374],[42,375],[9,376],[282,377],[35,378],[284,379],[338,380],[325,381],[100,382],[341,383],[274,384],[309,385],[297,386],[352,387],[273,388],[140,389],[257,390],[4,391],[366,392],[331,393],[158,394],[13,395],[112,396],[131,397],[12,398]]));