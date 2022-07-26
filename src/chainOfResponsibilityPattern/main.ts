import { Trouble } from "./trouble";
import { Support } from "./support";
import { NoSupport } from "./noSupport";
import { LimitSupport } from "./limitSupport";
import { SpecialSupport } from "./specialSupport";
import { OddSupport } from "./oddSupport";

const alice: Support = new NoSupport("Alice");
const bob: Support = new LimitSupport("Bob", 100);
const charlie: Support = new SpecialSupport("Charlie", 429);
const diana: Support = new LimitSupport("Diana", 200);
const elmo: Support = new OddSupport("Elmo");
const fred: Support = new LimitSupport("Fred", 300);

alice.setNext(bob);
bob.setNext(charlie);
charlie.setNext(diana);
diana.setNext(elmo);
elmo.setNext(fred);

for (let i = 0; i < 500; i += 33) alice.support(new Trouble(i));
