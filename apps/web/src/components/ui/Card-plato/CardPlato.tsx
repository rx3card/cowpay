"use client";

import Image from "next/image";

import type { ReactNode } from "react";

type CardPlatoProps = {
  img: string;
  name: string;
  descripcion: string;
  price: number;
  children?: ReactNode;
};

function CardPlato({
  img,
  name,
  descripcion,
  price,
  children,
}: CardPlatoProps) {
  const cardPlatoStyle =
    "flex flex-col gap-[var(--spacing-sm)] border border-[var(--color-primary)] hover:border-[var(--color-primary-hover)] active:border-[var(--color-primary-active)] rounded-[8px] p-[var(--spacing-md)]";
  const imgStyle ="w-full max-w-[600px] h-auto mx-auto md:w-[280px] md:h-[220px] object-cover rounded-[8px]";
  const contentStyle ="flex-1 flex flex-col pl-[var(--spacing-md)]";
  const priceStyle ="text-[var(--font-size-card-title)] font-[var(--font-weight-card-title)] pl-[var(--spacing-md)]";
  const formattedPrice = price.toLocaleString("es-CO");
  return (
    <div className={cardPlatoStyle}>
      <Image
        className={imgStyle}
        src={img}
        alt={name}
        width={600}
        height={220}
      />
      <div className={contentStyle}>
        <h2>{name}</h2>
        <p>{descripcion}</p>
        <span className={priceStyle}>${formattedPrice}</span>
        {children}
      </div>
    </div>
  );
}

export default CardPlato;