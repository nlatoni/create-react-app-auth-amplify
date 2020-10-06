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
          <div className="w-full max-w-screen-xl mx-auto px-6 text-left">
            <div className="lg:flex -mx-6">
              <div className="fixed inset-0 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5 hidden pt-16" id="sidebar">
                <div className="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent overflow-hidden lg:top-16 bg-white">
                  <div className="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
                    <div className="mb-8">
                      <h5 className="mb-3 lg:mb-2 uppercase tracking-wide font-bold text-sm lg:text-xs text-gray-500">Nomination Forms and Resources</h5>
                      <ul>
                        <li className="mb-3 lg:mb-1">
                          <a className="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block hover:translate-x-2px hover:text-gray-900 text-gray-600 font-medium" href="/src/documents/2020-nomination-form-att-fellows-honor.docx" download="2020-nomination-form-att-fellows-honor.docx">
                            <span className="relative">2020 AT&amp;T Fellows Honor</span>
                          </a>
                        </li>
                        <li className="mb-3 lg:mb-1">
                          <a className="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block hover:translate-x-2px hover:text-gray-900 text-gray-600 font-medium" href="/src/documents/2020-nomination-form-att-ops-excellence-medal.docx" download="2020-nomination-form-att-ops-excellence-medal.docx">
                            <span className="relative">2020 AT&amp;T Operations Excellence Medal</span>
                          </a>
                        </li>
                        <li className="mb-3 lg:mb-1">
                          <a className="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block hover:translate-x-2px hover:text-gray-900 text-gray-600 font-medium" href="/src/documents/2020-nomination-form-att-science-tech-medal.docx" download="2020-nomination-form-att-science-tech-medal.docx">
                            <span className="relative">2020 AT&amp;T Science and Technology Medal</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible">
                <p>Our company's rich history of innovation was built upon ingenuity, hard work, and determination. For decades, we have used the AT&amp;T Technical Awards to recognize our employees' outstanding technical and operational achievements.</p>
                <p>The AT&amp;T Technical Awards are a great example of our <i>How We Connect</i> culture model - <i>Serve Customers First</i>, <i>Move Faster</i>, <i>Act Boldly</i>, and <i>Win As One</i> - in action. We all know someone who demonstrates these behaviors every day. Now is your opportunity to recognize them for their amazing contributions to our company.</p>
                <p>Together, we’re proud to announce this year's call for nominations for the following awards:</p>
                <ul>
                  <li><b>The AT&amp;T Fellows Honor</b> is bestowed on individuals in AT&amp;T's technical community who have made sustained and notable contributions through scientific and technical achievements that have significant impact to AT&amp;T's business.</li>
                  <li><b>The AT&amp;T Science and Technology Medals</b> are bestowed for achievements that demonstrate remarkable technical depth or breadth in a given area that has resulted in a unique and significant contribution in service of AT&amp;T.</li>
                  <li><b>The AT&amp;T Operational Excellence Medals</b> are awarded to individuals who demonstrate outstanding, innovative, and unique contributions in operational excellence in support of AT&amp;T products and services.</li>
                </ul>
                <p>The three awards are available to all AT&amp;T managers. The deadline for nominations is Friday, October 30.</p>
                <p>We look forward to seeing your nominations and are excited to honor our company's best with these awards early next year.</p>
              </div>
              <div className="flex">
                <div className="w-1/2">
                  <p><b>Jeremy Legg</b><br/>Chief Technology Officer</p>
                </div>
                <div className="w-1/2">
                  <p><b>Scott Mair</b><br/>President - Network Engineering &amp; Operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
