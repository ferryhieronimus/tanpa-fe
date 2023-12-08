"use client";
import Card from "@/app/components/card";
import { Articles } from "@/types";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import { Fragment, useEffect, useRef } from "react";
import { useArticles } from "@/hooks/use-articles";
import { useArticlesByTag } from "@/hooks/use-articles-by-tag";

function ArticlesList({
  hook,
}: {
  hook: (arg?: any) => UseInfiniteQueryResult<Articles, unknown>;
}) {
  const observerTarget = useRef(null);

  const { data, fetchNextPage, isFetchingNextPage } = hook();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        fetchNextPage();
      }
    }, options);

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, []);

  if (!data)
    return <div className='h-screen flex justify-center'>Not found</div>;
  
  return (
    <main className='flex flex-1 h-full justify-center bg-neutral-50 pb-8'>
      <div className='w-full max-w-6xl mx-4 md:mx-8 py-6 flex flex-col md:grid md:grid-cols-12 gap-12 lg:gap-y-20'>
        {data.pages[0].articles.length === 0 && (
          <div className='flex md:col-span-12 justify-center'>
            No articles found.
          </div>
        )}
        {data.pages.map((group, i) => (
          <Fragment key={i}>
            {group.articles.map((article) => (
              <Card data={article} key={article.id} />
            ))}
          </Fragment>
        ))}

        {isFetchingNextPage && (
          <div className='flex justify-center'>
            <span className='loading loading-infinity loading-lg'></span>
          </div>
        )}
        <div ref={observerTarget} className='h-12'></div>
      </div>
    </main>
  );
}

export function ArticlesFromHome() {
  return <ArticlesList hook={useArticles} />;
}

export function ArticlesFromTag({ tag }: { tag: string }) {
  // Call the hook directly within the component
  const useHook = () => useArticlesByTag(tag);

  return <ArticlesList hook={useHook} />;
}
