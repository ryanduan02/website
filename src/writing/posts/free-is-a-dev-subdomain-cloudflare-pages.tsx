import type { Writing } from "../../types/writing";

export const freeIsADevSubdomainCloudflarePages: Writing = {
	slug: "free-is-a-dev-subdomain-cloudflare-pages",
	title: "A simple way you can the (sub)domain you want for free",
	date: "2025-12-22",
	content: (
		<>
			<p>
				This piece documents the full process of getting a free custom subdomain
				(<code>.is-a.dev</code> specifically) and deploying a personal website on
				Cloudflare Pages, including the common pitfalls, CI failures, DNS issues,
				and how to fix them.
			</p>

			<p>
				If you want a cool domain, zero hosting cost, and no bills, take a look
				at this guide.
			</p>

			<h4>Overview of the Stack</h4>
			<ul>
				<li>
					<strong>Domain:</strong> ryanduan.is-a.dev (free community-managed
					subdomain)
				</li>
				<li>
					<strong>Hosting:</strong> Cloudflare Pages (Free tier)
				</li>
				<li>
					<strong>Source Control:</strong> GitHub
				</li>
				<li>
					<strong>Frontend:</strong> Vite + React (static build)
				</li>
				<li>
					<strong>DNS:</strong> Managed by the is-a.dev project
				</li>
				<li>
					<strong>Cost:</strong> $0/month
				</li>
			</ul>

			<h4>Step 1: Deploy the Website on Cloudflare Pages First</h4>
			<p>
				Before requesting a custom domain, you need a real, reachable website.
				Cloudflare Pages provides this, though you can do this step any way you
				like.
			</p>

			<blockquote>
				<p>
					<strong>Why this matters:</strong> The <em>is-a.dev project</em> rejects
					CNAMEs that point to Cloudflare Tunnels (<code>*.cfargotunnel.com</code>
					), self-hosted IPs without a stable hostname, and placeholder or
					loopback domains. They want a legitimate public endpoint.
				</p>
			</blockquote>

			<p>
				<strong>What to do:</strong>
			</p>
			<ol>
				<li>Push your website to a GitHub repository</li>
				<li>Go to Cloudflare Dashboard → Workers &amp; Pages</li>
				<li>Create a Pages project</li>
				<li>Connect your GitHub repo</li>
				<li>Configure build settings (if necessary)</li>
			</ol>

			<h4>Step 2: Request an is-a.dev Subdomain</h4>
			<p>
				The{" "}
				<a href="https://github.com/is-a-dev" target="_blank" rel="noreferrer">
					is-a.dev project
				</a>{" "}
				is managed via GitHub pull requests.
			</p>

			<p>
				<strong>How it works (outlined in the is-a.dev repo):</strong>
			</p>
			<ol>
				<li>Each subdomain is defined by a JSON file.</li>
				<li>CI validates ownership, DNS safety, and abuse prevention.</li>
				<li>Maintainers manually review and merge.</li>
				<li>Create the domain file.</li>
				<li>
					In your fork of the repo, add your JSON. For me, it was:
				</li>
			</ol>

			<pre>
				<code>{`{
		"owner": {
			"username": "ryanduan02",
			"email": "ryanduan02@gmail.com"
		},
		"records": {
			"CNAME": "website-3t5.pages.dev"
		}
	}`}</code>
			</pre>

			<p>
				<strong>Common mistakes (and why CI fails)</strong>
			</p>
			<ul>
				<li>CNAME pointing to an invalid CNAME</li>
				<li>Invalid hostname formats</li>
				<li>Missing owner contact info</li>
				<li>JSON syntax errors (commas, braces)</li>
			</ul>

			<h4>Step 3: Open the Pull Request</h4>
			<ol>
				<li>Commit your JSON file</li>
				<li>Open a pull request from your fork to the main repo</li>
				<li>Wait for automated checks to pass</li>
				<li>
					Send your pull request ID into the pull-request channel of the{" "}
					<a
						href="https://discord.gg/p9gYaPC8"
						target="_blank"
						rel="noreferrer"
					>
						is-a.dev Discord
					</a>
					.
				</li>
			</ol>

			<h4>Step 4: Add the Custom Domain in Cloudflare Pages</h4>
			<p>Once the PR is merged:</p>
			<ol>
				<li>Go to your Cloudflare Pages project</li>
				<li>
					Open Custom Domains and add your subdomain (e.g.{" "}
					<code>xyz.is-a.dev</code>)
				</li>
				<li>Choose "My DNS provider" and select CNAME setup</li>
				<li>
					Cloudflare will show something like:
					<ol>
						<li>
							Name: <code>xyz</code>
						</li>
						<li>
							Target: <code>abc.pages.dev</code>
						</li>
					</ol>
				</li>
			</ol>

			<p>
				You don't manually add this record — it already exists thanks to the PR.
			</p>

			<p>Cloudflare now verifies DNS ownership.</p>

			<h4>Step 5: Wait for DNS Propagation &amp; SSL and Finish</h4>
			<p>
				Propagation typically takes a few minutes—sometimes an hour and up to 24
				hours. During this time, DNS propagates globally.
			</p>

			<p>Now you have your domain!</p>
		</>
	),
};
