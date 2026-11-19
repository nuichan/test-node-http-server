FROM public.ecr.aws/amazonlinux/amazonlinux:2023

RUN dnf update -y && \
    dnf install -y nodejs20 shadow-utils && \
    dnf clean all && \
    groupadd -r appuser && useradd -r -g appuser appuser

WORKDIR /app

COPY --chown=appuser:appuser index.js ./index.js

USER appuser

EXPOSE 3000

CMD ["node-20", "index.js"]
