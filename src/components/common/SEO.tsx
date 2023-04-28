import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// interface Metadata {
// 	title: string;
// 	description: string;
// 	siteUrl: string;
// 	image: string;
// }

// interface Query {
// 	site: {
// 		siteMetadata: Metadata;
// 	};
// }

const SEO: React.FunctionComponent<Partial<Metadata>> = ({
	title,
	description,
	siteUrl,
	image,
}) => {
	const { pathname } = useLocation();
	const {
		site: { siteMetadata },
	}: Query = useStaticQuery(graphql`
		query SEO {
			site {
				siteMetadata {
					title
					description
					siteUrl
					image
				}
			}
		}
	`);

	const {
		title: defaultTitle,
		description: defaultDescription,
		siteUrl: url,
		image: defaultImage,
	} = siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${url}${image || defaultImage}`,
		url: `${url}${pathname}`,
	};

	return (
		<Helmet title={seo.title}>
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			{seo.url && <meta property="og:url" content={seo.url} />}
			{seo.title && <meta property="og:title" content={seo.title} />}
			{seo.description && (
				<meta property="og:description" content={seo.description} />
			)}
			{seo.image && <meta property="og:image" content={seo.image} />}
			{seo.title && <meta name="twitter:title" content={seo.title} />}
			{seo.description && (
				<meta name="twitter:description" content={seo.description} />
			)}
			{seo.image && <meta name="twitter:image" content={seo.image} />}
		</Helmet>
	);
};

export default SEO;