import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

interface Metadata {
	title: string;
	description: string;
	siteUrl: string;
	image: string;
	social: {
		twitter: string;
	};
	keywords: string[];
}

interface Query {
	site: {
		siteMetadata: Metadata;
	};
}

const SEO: React.FunctionComponent<Partial<Metadata>> = ({
	title,
	description,
	image,
	keywords,
}) => {
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
					social {
						twitter
					}
					keywords
				}
			}
		}
	`);

	const {
		title: defaultTitle,
		description: defaultDescription,
		siteUrl: url,
		image: defaultImage,
		keywords: defaultKeywords,
		social: { twitter: defaultTwitterCreator },
	} = siteMetadata;

	const pathname = useLocation();

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${url}${image || defaultImage}`,
		url: `${url}${pathname}`,
		keywords: keywords || defaultKeywords,
		twitter: defaultTwitterCreator,
	};

	return (
		<Helmet
			title={seo.title}
			htmlAttributes={{
				lang: 'es',
			}}
			meta={[
				{
					name: `description`,
					content: seo.description,
				},
				{
					name: 'keywords',
					content: seo.keywords.join(','),
				},
				{
					property: `og:title`,
					content: seo.title,
				},
				{
					property: `og:description`,
					content: seo.description,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:creator`,
					content: `@${seo.twitter}`,
				},
				{
					name: `twitter:title`,
					content: seo.title,
				},
				{
					name: `twitter:description`,
					content: seo.description,
				},
			].concat(
				seo.image
					? [
							{
								property: 'og:image',
								content: seo.image,
							},
							{
								name: 'twitter:card',
								content: 'summary_large_image',
							},
					  ]
					: [
							{
								name: 'twitter:card',
								content: 'summary',
							},
					  ]
			)}></Helmet>
	);
};

export default SEO;