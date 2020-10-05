import React, { Component } from "react";
import { Auth } from 'aws-amplify';

export class InternalApp extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    Auth.signOut();
  }
  render() {
    if (this.props.authState === "signedIn") {
      return (
        <div className="App">
          <header className="App-header">
            <button onClick={this.signOut}>Sign Out</button>
            <p>AT&amp;T Technical Awards</p>
            <p>Nominations Now Open (Deadline Oct 30th)</p>
          </header>
          <div className="flex mb-4">
          <div className="w-full">
            <p>Our company's rich history of innovation was built upon ingenuity, hard work, and determination. For decades, we have used the AT&amp;T Technical Awards to recognize our employees' outstanding technical and operational achievements.</p>
            <p>The AT&amp;T Technical Awards are a great example of our <i>How We Connect</i> culture model - <i>Serve Customers First</i>, <i>Move Faster</i>, <i>Act Boldly</i>, and <i>Win As One</i> - in action. We all know someone who demonstrates these behaviors every day. Now is your opportunity to recognize them for their amazing contributions to our company.</p>
            <p>Together, we’re proud to announce this year's call for nominations for the following awards:</p>
            <p>
              <ul>
                <li><b>The AT&amp;T Fellows Honor</b> is bestowed on individuals in AT&amp;T's technical community who have made sustained and notable contributions through scientific and technical achievements that have significant impact to AT&amp;T's business.</li>
                <li><b>The AT&amp;T Science and Technology Medals</b> are bestowed for achievements that demonstrate remarkable technical depth or breadth in a given area that has resulted in a unique and significant contribution in service of AT&amp;T.</li>
                <li><b>The AT&amp;T Operational Excellence Medals</b> are awarded to individuals who demonstrate outstanding, innovative, and unique contributions in operational excellence in support of AT&amp;T products and services.</li>
              </ul>
            </p>
            <p>The three awards are available to all AT&amp;T managers. The deadline for nominations is Friday, October 30.</p>
            <p>We look forward to seeing your nominations and are excited to honor our company's best with these awards early next year.</p>
          </div>
        </div>
          <div className="flex mb-4">
          <div className="w-1/2">
            <p><b>Jeremy Legg</b><br/>Chief Technology Officer</p>
          </div>
          <div className="w-1/2">
            <p><b>Scott Mair</b><br/>President - Network Engineering &amp; Operations</p>
          </div>
        </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
